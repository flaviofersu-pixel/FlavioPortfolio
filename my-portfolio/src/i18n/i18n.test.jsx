import { fireEvent, render, screen, within } from "@testing-library/react";
import { App } from "../App";
import en from "./en";
import es from "./es";
import { translate } from "./languages";
import nl from "./nl";

const keysOf = (node, prefix = "") =>
  Object.entries(node).flatMap(([key, value]) =>
    value && typeof value === "object" && !Array.isArray(value) ? keysOf(value, `${prefix}${key}.`) : [`${prefix}${key}`]
  );

test("Dutch and Spanish have exactly the same keys as English", () => {
  expect(keysOf(nl).sort()).toEqual(keysOf(en).sort());
  expect(keysOf(es).sort()).toEqual(keysOf(en).sort());
});

test("a missing key falls back to English", () => {
  const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  expect(translate("nl", "nav.projects")).toBe("Projecten");
  expect(translate("nl", "does.not.exist")).toBeUndefined();
  expect(translate("xx", "nav.projects")).toBe("Projects");
  warn.mockRestore();
});

test("switching language keeps the remote screen where it was and updates the page", () => {
  window.history.replaceState(null, "", "/#projects");
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Next track" }));
  expect(screen.getByText("[TODO: song 2]")).toBeInTheDocument();

  const switcher = screen.getByRole("list", { name: "Language" });
  fireEvent.click(within(switcher).getByRole("button", { name: "Nederlands" }));

  expect(screen.getByText("[TODO: song 2]")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Volgend nummer" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Projecten" })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe("nl");
  expect(window.location.pathname).toBe("/nl/");
  expect(window.location.hash).toBe("#projects");
  expect(within(screen.getByRole("list", { name: "Taal" })).getByRole("button", { name: "Nederlands" })).toHaveAttribute(
    "aria-current",
    "true"
  );
  expect(localStorage.getItem("lang")).toBe("nl");
});
