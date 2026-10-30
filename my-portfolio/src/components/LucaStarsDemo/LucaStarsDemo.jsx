import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ShoppingCart, User } from "lucide-react";
import { CartView } from "./CartView";
import { CheckoutView } from "./CheckoutView";
import { cartTotals, euro, findGame, LOGO, PROMO_CODES } from "./games";
import { ProfileView } from "./ProfileView";
import { AboutView, GamesView, HomeView, ProductView, StoreView } from "./ShopViews";
import { useLanguage } from "../../i18n";
import { button } from "./styles";

const navItems = ["home", "games", "store", "about"];

// A small, self-contained rebuild of the LucaStars webshop with sample data.
// `wide` uses the roomier shop layout on large screens even when not full screen.
// Only the frame around the shop is translated; the shop itself stays English (lang="en").
export function LucaStarsDemo({ wide = false }) {
  const { t } = useLanguage();
  const [view, setView] = useState({ name: "home" });
  const [cart, setCart] = useState([]);
  const [promo, setPromo] = useState(null);
  const [orders, setOrders] = useState([]);
  const [placedOrder, setPlacedOrder] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const scroller = useRef(null);

  useEffect(() => {
    if (!expanded) return undefined;
    const onKey = (event) => event.key === "Escape" && setExpanded(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [expanded]);

  const cartGames = cart.map(findGame);

  const shop = {
    wide: wide || expanded,
    cartGames,
    promo,
    orders,
    go: (name, sku) => {
      setView({ name, sku });
      if (scroller.current) scroller.current.scrollTop = 0;
    },
    inCart: (sku) => cart.includes(sku),
    addToCart: (sku) => setCart((items) => (items.includes(sku) ? items : [...items, sku])),
    removeFromCart: (sku) => setCart((items) => items.filter((item) => item !== sku)),
    applyPromo: (value) => {
      const code = value.trim().toUpperCase();
      if (!code) return "Enter a code first.";
      if (!PROMO_CODES[code]) return "This code is not valid.";
      setPromo({ code, ...PROMO_CODES[code] });
      return null;
    },
    placeOrder: () => {
      const order = {
        id: `LS-${1001 + orders.length}`,
        date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
        games: cartGames.map((game) => game.title),
        total: cartTotals(cartGames, promo?.amount).total,
      };
      setOrders([order, ...orders]);
      setPlacedOrder(order);
      setCart([]);
      setPromo(null);
      shop.go("home");
    },
  };

  const reset = () => {
    setCart([]);
    setPromo(null);
    setOrders([]);
    setPlacedOrder(null);
    shop.go("home");
  };

  const closeOrder = (name) => {
    setPlacedOrder(null);
    shop.go(name);
  };

  const screens = {
    home: <HomeView shop={shop} />,
    games: <GamesView shop={shop} />,
    store: <StoreView shop={shop} />,
    product: view.sku ? <ProductView key={view.sku} shop={shop} sku={view.sku} /> : null,
    cart: <CartView shop={shop} />,
    checkout: <CheckoutView shop={shop} />,
    profile: <ProfileView shop={shop} />,
    about: <AboutView />,
  };

  return (
    <div
      className={
        expanded
          ? "fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-2 sm:p-6"
          : "h-[560px] lg:h-[640px]"
      }
      onClick={(event) => expanded && event.target === event.currentTarget && setExpanded(false)}
    >
      <div
        className={`relative flex h-full w-full flex-col overflow-hidden border-2 bg-[#060a2b] ${
          expanded ? "max-w-6xl border-lcd" : "border-ink"
        }`}
        role="region"
        aria-label={t("demo.label")}
      >
        <div className="flex items-center gap-5 bg-ink px-3 py-2 text-base text-lcd [&_:focus-visible]:outline-lcd">
          <p className="min-w-0 flex-1 truncate">lucastars.demo/{view.name}</p>
          <button type="button" onClick={reset} className="underline-offset-4 hover:underline">
            {t("demo.reset")}
          </button>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="underline-offset-4 hover:underline"
            title={expanded ? t("demo.escHint") : undefined}
          >
            {expanded ? t("demo.exitFullScreen") : t("demo.fullScreen")}
          </button>
        </div>

        <div
          ref={scroller}
          lang="en"
          className="relative flex-1 overflow-y-auto bg-gradient-to-b from-[#060a2b] to-[#10153c] font-pixel text-white [&_:focus-visible]:outline-[#edad2e]"
        >
          {view.name === "checkout" ? (
            <header className="flex justify-center pt-3">
              <img src={LOGO} alt="LucaStars" className="h-10 w-auto" />
            </header>
          ) : (
            <>
              <header className="flex items-center justify-between px-4 pt-3">
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => shop.go("home")} aria-label="LucaStars home">
                    <img src={LOGO} alt="" className="h-10 w-auto" />
                  </button>
                  <button
                    type="button"
                    onClick={() => shop.go("profile")}
                    className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider hover:text-[#edad2e]"
                  >
                    <User size={16} className="fill-[#edad2e] text-[#edad2e]" aria-hidden="true" />
                    My profile
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => shop.go("cart")}
                  className="relative p-1 hover:text-[#edad2e]"
                  aria-label={`Shopping cart, ${cart.length} ${cart.length === 1 ? "item" : "items"}`}
                >
                  <ShoppingCart size={22} aria-hidden="true" />
                  {cart.length > 0 ? (
                    <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-sm bg-[#384097] px-1 text-[9px]">
                      {cart.length}
                    </span>
                  ) : null}
                </button>
              </header>
              <nav className="mt-2 flex flex-wrap justify-center gap-2 px-4" aria-label="Demo shop">
                {navItems.map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => shop.go(name)}
                    aria-current={view.name === name ? "page" : undefined}
                    className={`${button} ${view.name === name ? "ring-2 ring-[#edad2e]" : ""}`}
                  >
                    {name}
                  </button>
                ))}
              </nav>
            </>
          )}
          <main className="relative px-4 pb-6 pt-4">{screens[view.name]}</main>
        </div>

        {placedOrder ? (
          <div lang="en" className="absolute inset-0 z-20 grid place-items-center bg-[#060a2b]/80 p-4 font-pixel text-white [&_:focus-visible]:outline-[#edad2e]">
            <div
              className="w-full max-w-xs border-2 border-[#edad2e] bg-[#20275e] p-5 text-center shadow-card"
              role="alertdialog"
              aria-labelledby="ls-order-title"
            >
              <CheckCircle2 size={36} className="mx-auto text-[#4cff88]" aria-hidden="true" />
              <h3 id="ls-order-title" className="mt-2 text-xl">
                Payment successful
              </h3>
              <p className="mt-2 text-xs text-[#acaed7]">
                Order #{placedOrder.id} · {euro(placedOrder.total)}
              </p>
              <p className="mt-1 text-[10px] text-[#acaed7]">Demo only: nothing was charged.</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button type="button" className={button} onClick={() => closeOrder("profile")}>
                  My orders
                </button>
                <button type="button" className={button} onClick={() => closeOrder("home")}>
                  Home
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
