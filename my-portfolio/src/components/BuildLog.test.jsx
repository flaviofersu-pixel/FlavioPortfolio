import { fireEvent, render, screen, within } from "@testing-library/react";
import { projects } from "../data/content";
import { BuildLog } from "./BuildLog";

// The real viewer pulls in three.js; a stand-in is enough to see when it mounts.
vi.mock("./ModelViewer", () => ({ ModelViewer: () => <div data-testid="model-viewer" /> }));

const remote = projects.find((project) => project.id === "spotify-remote");
const renderLog = () => render(<BuildLog projectId={remote.id} steps={remote.buildLog} />);
const stepRow = () => screen.getByRole("list", { name: "Build steps" });
const thumb = (name) => within(stepRow()).getByRole("button", { name });

test("opens on the finished remote with the display part open", () => {
  renderLog();
  expect(thumb("04 Finished")).toHaveAttribute("aria-current", "step");
  expect(screen.getByRole("heading", { name: "Finished" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Next step" })).toHaveAttribute("aria-disabled", "true");
  expect(screen.getByRole("button", { name: "2: Sharp memory display" })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByText(/the battery does not need to be big/)).toBeInTheDocument();
});

test("the 3D model only mounts on step 01 and the video only on step 02", () => {
  renderLog();
  expect(screen.queryByTestId("model-viewer")).not.toBeInTheDocument();
  expect(document.querySelector("video")).toBeNull();

  fireEvent.click(thumb("01 Design"));
  expect(screen.getByTestId("model-viewer")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Previous step" })).toHaveAttribute("aria-disabled", "true");
  expect(screen.getByText("Step 1 of 4: Design")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Next step" }));
  expect(screen.queryByTestId("model-viewer")).not.toBeInTheDocument();
  expect(document.querySelector("video")).not.toBeNull();
  expect(thumb("02 Breadboard")).toHaveAttribute("aria-current", "step");

  fireEvent.click(screen.getByRole("button", { name: "Next step" }));
  expect(document.querySelector("video")).toBeNull();
});

test("disabled previous/next buttons do nothing", () => {
  renderLog();
  fireEvent.click(screen.getByRole("button", { name: "Next step" }));
  expect(thumb("04 Finished")).toHaveAttribute("aria-current", "step");
});

test("arrow keys in the step row move between steps and focus", () => {
  renderLog();
  thumb("04 Finished").focus();
  fireEvent.keyDown(stepRow(), { key: "ArrowLeft" });
  expect(thumb("03 Soldering")).toHaveAttribute("aria-current", "step");
  expect(thumb("03 Soldering")).toHaveFocus();
  fireEvent.keyDown(stepRow(), { key: "Home" });
  expect(thumb("01 Design")).toHaveFocus();
  fireEvent.keyDown(stepRow(), { key: "ArrowLeft" });
  expect(thumb("01 Design")).toHaveAttribute("aria-current", "step");
});

test("dots and the parts list select the same part", () => {
  renderLog();
  fireEvent.click(screen.getByRole("button", { name: "1: Three buttons" }));
  expect(screen.getByRole("button", { name: "1: Three buttons" })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("button", { name: "Three buttons" })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByText("Previous, play/pause and next.")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "The case" }));
  expect(screen.getByRole("button", { name: "4: The case" })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("button", { name: "1: Three buttons" })).toHaveAttribute("aria-pressed", "false");
});
