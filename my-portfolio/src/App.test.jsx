import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders the portfolio name", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /flavio fernandez suarez/i })
  ).toBeInTheDocument();
});
