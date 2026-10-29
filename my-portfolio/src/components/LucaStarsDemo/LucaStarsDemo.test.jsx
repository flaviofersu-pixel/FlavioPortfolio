import { fireEvent, render, screen, within } from "@testing-library/react";
import { LucaStarsDemo } from "./LucaStarsDemo";
import { cartTotals } from "./games";

test("cart totals match the real shop: discount first, then 21% VAT", () => {
  const totals = cartTotals([{ price: 43.99 }], 10);
  expect(totals.discount).toBe(10);
  expect(totals.vat).toBeCloseTo(7.14, 2);
  expect(totals.total).toBeCloseTo(41.13, 2);
  expect(cartTotals([{ price: 4.5 }], 10).total).toBe(0);
});

test("a visitor can buy a game with a promo code", () => {
  render(<LucaStarsDemo />);

  fireEvent.click(screen.getByRole("button", { name: "View Ambigious Darkness" }));
  fireEvent.click(screen.getByRole("button", { name: "Add to cart" }));
  expect(screen.getByRole("button", { name: "Shopping cart, 1 item" })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Go to cart" }));
  fireEvent.change(screen.getByLabelText("Promo code"), { target: { value: "nope" } });
  fireEvent.click(screen.getByRole("button", { name: "Apply code" }));
  expect(screen.getByText("This code is not valid.")).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText("Promo code"), { target: { value: "luca10" } });
  fireEvent.click(screen.getByRole("button", { name: "Apply code" }));
  expect(screen.getByText("€41.13")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /proceed to checkout/i }));
  fireEvent.click(screen.getByRole("button", { name: /autofill demo data/i }));
  fireEvent.click(screen.getByRole("button", { name: "Place order" }));

  const dialog = screen.getByRole("alertdialog");
  expect(within(dialog).getByText(/LS-1001/)).toBeInTheDocument();

  fireEvent.click(within(dialog).getByRole("button", { name: "My orders" }));
  expect(screen.getByText("Order history")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Shopping cart, 0 items" })).toBeInTheDocument();
});
