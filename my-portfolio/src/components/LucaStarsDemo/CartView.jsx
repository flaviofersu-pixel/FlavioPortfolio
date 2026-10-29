import { useState } from "react";
import { ChevronRight, ShoppingCart, Trash2 } from "lucide-react";
import { cartTotals, euro, findGame, games, PROMO_CODES, suggested } from "./games";
import { SuggestionCard } from "./GameCard";
import { backLink, button, lightPanel } from "./styles";

export function Totals({ totals, large = false }) {
  const rows = [
    ["Subtotal", euro(totals.subtotal)],
    ["Discount", `-${euro(totals.discount)}`],
    ["VAT (21%)", euro(totals.vat)],
  ];
  return (
    <dl className="text-xs">
      {rows.map(([label, value]) => (
        <div key={label} className="flex justify-between py-1.5">
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
      <div
        className={`mt-2 flex justify-between border-t-2 border-[#1b2147] pt-3 font-bold ${large ? "text-xl" : "text-lg"}`}
      >
        <dt>Total</dt>
        <dd>{euro(totals.total)}</dd>
      </div>
    </dl>
  );
}

function DiscountTab({ onApply, applied }) {
  const [open, setOpen] = useState(false);
  const [code, promo] = Object.entries(PROMO_CODES)[0];

  return (
    <div className="absolute left-0 top-24 z-10 flex">
      {open ? (
        <div className="w-44 border-2 border-l-0 border-[#4651a3] bg-[#2b3370] p-2 font-mono text-[11px]">
          <p>Use this code for {euro(promo.amount)} off.</p>
          <p className="my-2 border-2 border-dashed border-[#edad2e] py-1.5 text-center text-sm tracking-widest text-[#edad2e]">
            {code}
          </p>
          <button
            type="button"
            onClick={() => onApply(code)}
            disabled={applied}
            className="w-full bg-[#f5c13f] py-1.5 font-sans font-bold text-[#111427] disabled:opacity-60"
          >
            {applied ? "Applied ✓" : "Apply code"}
          </button>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="self-start border-2 border-l-0 border-[#4651a3] bg-[#2b3370] px-1 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#edad2e] [writing-mode:vertical-rl]"
      >
        Discount code
      </button>
    </div>
  );
}

export function CartView({ shop }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const totals = cartTotals(shop.cartGames, shop.promo?.amount);
  const suggestions = [...suggested.map(findGame), ...games]
    .filter((game, index, list) => !shop.inCart(game.sku) && list.indexOf(game) === index)
    .slice(0, 4);

  const apply = (value) => {
    const message = shop.applyPromo(value);
    setError(message ?? "");
    if (!message) setCode("");
  };

  return (
    <div className="pl-6">
      <DiscountTab onApply={apply} applied={Boolean(shop.promo)} />
      <button type="button" className={backLink} onClick={() => shop.go("home")}>
        {"<--- Back to home"}
      </button>
      <h3 className="mt-2 flex items-center gap-2 border-b-2 border-[#384097] pb-2 text-2xl sm:text-3xl">
        <ShoppingCart size={26} aria-hidden="true" /> Shopping Cart
      </h3>

      <div className="mt-3 grid items-start gap-3 sm:grid-cols-[1fr_15rem]">
        <ul className="space-y-2">
          {shop.cartGames.length === 0 ? (
            <li className="border-2 border-[#384097] bg-[#2b3370] p-4 text-sm">
              Your cart is empty.{" "}
              <button
                type="button"
                className="text-[#edad2e] underline"
                onClick={() => shop.go("store")}
              >
                Find a game
              </button>
            </li>
          ) : null}
          {shop.cartGames.map((game) => (
            <li
              key={game.sku}
              className="flex items-center gap-3 border-2 border-[#384097] bg-[#2b3370] p-2"
            >
              <img
                src={game.image}
                alt=""
                className="h-14 w-14 shrink-0 border border-[#4651a3] object-cover"
              />
              <button
                type="button"
                onClick={() => shop.go("product", game.sku)}
                className="min-w-0 flex-1 text-left text-sm hover:text-[#edad2e]"
              >
                {game.title}
              </button>
              <div className="flex shrink-0 flex-col items-end gap-1.5">
                <span className="text-sm">{euro(game.price)}</span>
                <button
                  type="button"
                  onClick={() => shop.removeFromCart(game.sku)}
                  className="flex items-center gap-1 bg-[#5b63b8] px-2 py-1 font-sans text-[11px] font-semibold hover:bg-[#6e76d1]"
                  aria-label={`Remove ${game.title}`}
                >
                  <Trash2 size={12} aria-hidden="true" /> Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        <aside className={`${lightPanel} p-3`}>
          <h4 className="mb-2 text-lg">Summary</h4>
          <Totals totals={totals} />
          <form
            className="mt-3"
            onSubmit={(event) => {
              event.preventDefault();
              apply(code);
            }}
          >
            <label className="text-[11px]" htmlFor="ls-promo">
              Promo code
            </label>
            <input
              id="ls-promo"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder="Enter code"
              className="mt-1 w-full border-2 border-[#384097] bg-white px-2 py-1.5 font-sans text-xs text-[#111427] outline-none focus:border-[#edad2e]"
            />
            <button type="submit" className={`${button} mt-2 w-full font-sans normal-case`}>
              Apply code
            </button>
            {error ? <p className="mt-1 text-[11px] text-[#c0392b]">{error}</p> : null}
            {shop.promo ? (
              <p className="mt-1 text-[11px] text-[#1e7d3e]">
                Code {shop.promo.code} applied: {euro(shop.promo.amount)} off.
              </p>
            ) : null}
          </form>
          <button
            type="button"
            disabled={shop.cartGames.length === 0}
            onClick={() => shop.go("checkout")}
            className={`${button} mt-3 flex w-full items-center justify-center gap-1 normal-case`}
          >
            Proceed to checkout <ChevronRight size={14} aria-hidden="true" />
          </button>
        </aside>
      </div>

      {suggestions.length > 0 ? (
        <section className="mt-6">
          <h4 className="text-base">You might also like</h4>
          <div className={`mt-2 grid grid-cols-2 gap-2 ${shop.wide ? "lg:grid-cols-4" : ""}`}>
            {suggestions.map((game) => (
              <SuggestionCard
                key={game.sku}
                game={game}
                onOpen={() => shop.go("product", game.sku)}
                onAdd={() => shop.addToCart(game.sku)}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
