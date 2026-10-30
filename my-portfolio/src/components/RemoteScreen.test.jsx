import { fireEvent, render, screen } from "@testing-library/react";
import { RemoteScreen } from "./RemoteScreen";

test("the remote screen always loads on Blinding Lights", () => {
  const { unmount } = render(<RemoteScreen />);
  expect(screen.getByText("Blinding Lights")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Next track" }));
  expect(screen.queryByText("Blinding Lights")).not.toBeInTheDocument();
  unmount();

  render(<RemoteScreen />);
  expect(screen.getByText("Blinding Lights")).toBeInTheDocument();
});

test("previous on the first track wraps to the last one", () => {
  render(<RemoteScreen />);
  fireEvent.click(screen.getByRole("button", { name: "Previous track" }));
  expect(screen.queryByText("Blinding Lights")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Next track" }));
  expect(screen.getByText("Blinding Lights")).toBeInTheDocument();
});
