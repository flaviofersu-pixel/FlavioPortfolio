import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Maximize2, Minimize2, RotateCcw, ShoppingCart, User } from "lucide-react";
import { CartView } from "./CartView";
import { CheckoutView } from "./CheckoutView";
import { cartTotals, euro, findGame, LOGO, PROMO_CODES } from "./games";
import { ProfileView } from "./ProfileView";
import { AboutView, GamesView, HomeView, ProductView, StoreView } from "./ShopViews";
import { button } from "./styles";

const navItems = ["home", "games", "store", "about"];

// A small, self-contained rebuild of the LucaStars webshop with sample data.
export function LucaStarsDemo() {
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
    wide: expanded,
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
          ? "fixed inset-0 z-[60] flex items-center justify-center bg-night/80 p-2 backdrop-blur-sm sm:p-6"
          : "h-[560px] lg:absolute lg:inset-0 lg:h-auto"
      }
      onClick={(event) => expanded && event.target === event.currentTarget && setExpanded(false)}
    >
      <div
        className={`relative flex flex-col overflow-hidden bg-[#060a2b] ${
          expanded
            ? "h-full w-full max-w-6xl rounded-xl border border-grape-700 shadow-card"
            : "h-full"
        }`}
        role="region"
        aria-label="LucaStars interactive demo"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-grape-950 px-3 py-2">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <p className="min-w-0 flex-1 truncate rounded bg-night px-2 py-1 font-mono text-[11px] text-grape-400">
            lucastars.demo/{view.name}
          </p>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-gold sm:inline">
            Interactive demo
          </span>
          <button
            type="button"
            onClick={reset}
            className="rounded p-1 text-grape-400 hover:text-white"
            aria-label="Reset demo"
            title="Reset demo"
          >
            <RotateCcw size={15} />
          </button>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="rounded p-1 text-grape-400 hover:text-white"
            aria-label={expanded ? "Exit full screen" : "Open demo full screen"}
            title={expanded ? "Exit full screen (Esc)" : "Full screen"}
          >
            {expanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
        </div>

        <div
          ref={scroller}
          className="relative flex-1 overflow-y-auto bg-gradient-to-b from-[#060a2b] to-[#10153c] font-pixel text-white"
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
          <div className="absolute inset-0 z-20 grid place-items-center bg-[#060a2b]/80 p-4 font-pixel text-white">
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
