import { useState } from "react";
import { Home, User } from "lucide-react";
import { cartTotals, euro } from "./games";
import { Totals } from "./CartView";
import { backLink, button, input, lightPanel } from "./styles";

const fields = {
  firstName: "First name",
  lastName: "Last name",
  email: "E-mail",
  address: "Address",
  province: "Province",
  city: "City",
  zip: "ZIP code",
  houseNumber: "House number",
};

const demoAddress = {
  firstName: "Demo",
  lastName: "Player",
  email: "demo@lucastars.nl",
  address: "Wibautstraat",
  province: "Noord-Holland",
  city: "Amsterdam",
  zip: "1091 GH",
  houseNumber: "2",
};

const empty = Object.fromEntries(Object.keys(fields).map((key) => [key, ""]));

export function CheckoutView({ shop }) {
  const [form, setForm] = useState(empty);
  const [showGames, setShowGames] = useState(false);
  const totals = cartTotals(shop.cartGames, shop.promo?.amount);
  const count = shop.cartGames.length;

  const field = (name, className = "") => (
    <input
      name={name}
      required
      type={name === "email" ? "email" : "text"}
      placeholder={fields[name]}
      aria-label={fields[name]}
      value={form[name]}
      onChange={(event) => setForm({ ...form, [name]: event.target.value })}
      className={`${input} ${className}`}
    />
  );

  return (
    <div>
      <button type="button" className={backLink} onClick={() => shop.go("cart")}>
        {"<--- Back to cart"}
      </button>
      <h3 className="mt-2 border-b-2 border-[#384097] pb-2 text-3xl">Checkout</h3>

      <div className="mt-3 grid items-start gap-3 sm:grid-cols-[1fr_15rem]">
        <form
          id="ls-checkout"
          className="space-y-3 border-2 border-[#384097] bg-[#2f3368] p-3"
          onSubmit={(event) => {
            event.preventDefault();
            shop.placeOrder(form);
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="flex items-center gap-2 text-sm">
              <User size={14} className="text-[#6e76d1]" aria-hidden="true" /> Contact information
            </h4>
            <button
              type="button"
              onClick={() => setForm(demoAddress)}
              className="text-[10px] uppercase tracking-wider text-[#edad2e] underline"
            >
              Autofill demo data
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {field("firstName")}
            {field("lastName")}
          </div>
          {field("email")}
          <h4 className="flex items-center gap-2 pt-2 text-sm">
            <Home size={14} className="text-[#6e76d1]" aria-hidden="true" /> Billing address
          </h4>
          {field("address")}
          {field("province")}
          <div className="grid grid-cols-3 gap-2">
            {field("city")}
            {field("zip")}
            {field("houseNumber")}
          </div>
        </form>

        <aside className={`${lightPanel} p-3`}>
          <h4 className="text-xl">Order Summary</h4>
          <p className="mt-1 text-[10px] leading-relaxed">
            Review the total and open the game list when needed.
          </p>
          <p className="mt-2 inline-block rounded-full border border-[#111427]/50 px-2 py-0.5 text-[9px] uppercase tracking-wider">
            {count} {count === 1 ? "game" : "games"} in your order
          </p>
          <button
            type="button"
            onClick={() => setShowGames((value) => !value)}
            aria-expanded={showGames}
            className="mt-2 w-full rounded border-2 border-[#384097] bg-[#4f5aa8] py-1.5 font-sans text-xs font-semibold text-white hover:bg-[#384097]"
          >
            {showGames ? "Hide the games" : "View the games on the order"}
          </button>
          {showGames ? (
            <ul className="mt-2 space-y-1 text-[11px]">
              {shop.cartGames.map((game) => (
                <li key={game.sku} className="flex justify-between gap-2">
                  <span>{game.title}</span>
                  <span>{euro(game.price)}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-3 border-t-2 border-[#1b2147] pt-1">
            <Totals totals={totals} large />
          </div>
          <button
            type="submit"
            form="ls-checkout"
            disabled={count === 0}
            className={`${button} mt-3 w-full rounded bg-[#2b3370] py-2.5 font-sans text-xs normal-case`}
          >
            Place order
          </button>
        </aside>
      </div>
    </div>
  );
}
