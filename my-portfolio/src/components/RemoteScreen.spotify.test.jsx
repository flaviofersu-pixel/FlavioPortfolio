import { act, fireEvent, render, screen } from "@testing-library/react";
import { RemoteScreen } from "./RemoteScreen";
import { createSpotifyController, loadSpotifyApi, toSpotifyUri } from "./spotifyEmbed";

vi.mock("./spotifyEmbed", async (importOriginal) => ({
  ...(await importOriginal()),
  loadSpotifyApi: vi.fn(),
  createSpotifyController: vi.fn(),
}));

vi.mock("../data/content", async (importOriginal) => ({
  ...(await importOriginal()),
  remoteTracks: [
    { title: "Love Me", artist: "Elvis Presley", url: "https://open.spotify.com/track/AAA111?si=x", seconds: null },
    { title: "Loco", artist: "Someone", url: "https://open.spotify.com/track/BBB222", seconds: null },
    { title: "A Love Like Her", artist: "BluNites", url: "https://open.spotify.com/track/CCC333", seconds: null },
  ],
}));

function fakeController() {
  const listeners = {};
  return {
    play: vi.fn(),
    pause: vi.fn(),
    togglePlay: vi.fn(),
    loadUri: vi.fn(),
    addListener: (name, listener) => {
      listeners[name] = listener;
    },
    update: (data) => act(() => listeners.playback_update({ data })),
  };
}

const press = (name) => act(async () => fireEvent.click(screen.getByRole("button", { name })));
const status = () => screen.getByText(/^(Sonando|Pausado)$/).textContent;

let controller;
beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
  controller = fakeController();
  loadSpotifyApi.mockReset().mockResolvedValue({});
  createSpotifyController.mockReset().mockResolvedValue(controller);
});
afterEach(() => vi.useRealTimers());

test("Spotify links become URIs", () => {
  expect(toSpotifyUri("https://open.spotify.com/track/AAA111?si=x")).toBe("spotify:track:AAA111");
  expect(toSpotifyUri("https://open.spotify.com/intl-nl/track/AAA111")).toBe("spotify:track:AAA111");
  expect(toSpotifyUri("spotify:track:AAA111")).toBe("spotify:track:AAA111");
  expect(toSpotifyUri("[TODO: Spotify link]")).toBeNull();
});

test("nothing loads from Spotify until a button is pressed", () => {
  render(<RemoteScreen />);
  expect(loadSpotifyApi).not.toHaveBeenCalled();
});

test("play starts Spotify and the screen follows what Spotify reports", async () => {
  render(<RemoteScreen />);
  await press("Play");

  expect(loadSpotifyApi).toHaveBeenCalledTimes(1);
  expect(createSpotifyController.mock.calls[0][2]).toBe("spotify:track:AAA111");
  expect(controller.play).toHaveBeenCalledTimes(1);
  expect(status()).toBe("Pausado"); // not playing until Spotify says so

  controller.update({ isPaused: false, isBuffering: false, position: 12000, duration: 30000 });
  expect(status()).toBe("Sonando");
  expect(screen.getByText("0:12")).toBeInTheDocument();
  expect(screen.getByText("0:30")).toBeInTheDocument();
  expect(screen.getByText("Playing Love Me by Elvis Presley")).toBeInTheDocument();

  await press("Pause");
  expect(controller.togglePlay).toHaveBeenCalledTimes(1);
  controller.update({ isPaused: true, isBuffering: false, position: 13000, duration: 30000 });
  expect(status()).toBe("Pausado");
  expect(screen.getByText("Paused")).toBeInTheDocument();

  await press("Next track");
  expect(controller.loadUri).toHaveBeenLastCalledWith("spotify:track:BBB222");
  expect(controller.play).toHaveBeenCalledTimes(2);
  expect(loadSpotifyApi).toHaveBeenCalledTimes(1);

  await press("Previous track");
  expect(controller.loadUri).toHaveBeenLastCalledWith("spotify:track:AAA111");
});

test("if Spotify doesn't start in time, the screen plays on its own and links to the track", async () => {
  render(<RemoteScreen />);
  await press("Play");
  expect(screen.queryByRole("link", { name: "Listen on Spotify" })).not.toBeInTheDocument();

  await act(async () => vi.advanceTimersByTime(5000));
  expect(status()).toBe("Sonando");
  expect(screen.getByRole("link", { name: "Listen on Spotify" })).toHaveAttribute(
    "href",
    "https://open.spotify.com/track/AAA111?si=x"
  );

  // Pressing play inside the embed later hands the screen back to Spotify.
  controller.update({ isPaused: false, isBuffering: false, position: 2000, duration: 30000 });
  expect(screen.queryByRole("link", { name: "Listen on Spotify" })).not.toBeInTheDocument();
  expect(screen.getByText("0:02")).toBeInTheDocument();
});

test("if the API can't load, the screen still works and links to the track", async () => {
  loadSpotifyApi.mockRejectedValue(new Error("blocked"));
  render(<RemoteScreen />);
  await press("Play");
  expect(status()).toBe("Sonando");
  expect(screen.getByRole("link", { name: "Listen on Spotify" })).toBeInTheDocument();
});
