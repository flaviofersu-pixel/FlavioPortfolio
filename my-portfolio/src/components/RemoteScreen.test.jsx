import { fireEvent, render, screen } from "@testing-library/react";
import { RemoteScreen } from "./RemoteScreen";

test("the remote screen always loads on the first track", () => {
  const { unmount } = render(<RemoteScreen />);
  expect(screen.getByText("Love Me")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Next track" }));
  expect(screen.queryByText("Love Me")).not.toBeInTheDocument();
  unmount();

  render(<RemoteScreen />);
  expect(screen.getByText("Love Me")).toBeInTheDocument();
});

test("previous on the first track wraps to the last one", () => {
  render(<RemoteScreen />);
  fireEvent.click(screen.getByRole("button", { name: "Previous track" }));
  expect(screen.queryByText("Love Me")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Next track" }));
  expect(screen.getByText("Love Me")).toBeInTheDocument();
});
