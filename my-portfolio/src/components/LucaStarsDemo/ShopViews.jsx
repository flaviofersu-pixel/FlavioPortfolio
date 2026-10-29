import { useState } from "react";
import { Sparkles } from "lucide-react";
import { bestSellers, findGame, games, latestReleases } from "./games";
import { GameCard, Price } from "./GameCard";
import { backLink, button, ghostButton, goldButton, input, panel } from "./styles";

function GameRow({ title, skus, shop }) {
  return (
    <section className={`${panel} p-3`}>
      <h3 className="mb-3 text-lg uppercase tracking-wide">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {skus.map((sku) => (
          <GameCard key={sku} game={findGame(sku)} onOpen={() => shop.go("product", sku)} />
        ))}
      </div>
    </section>
  );
}

export function HomeView({ shop }) {
  return (
    <div className="space-y-3">
      <div className={`grid gap-3 ${shop.wide ? "lg:grid-cols-2" : ""}`}>
        <section
          className={`${panel} bg-pixel-grid bg-gradient-to-br from-[#2b3370] to-[#1b2147] p-4 sm:p-5`}
        >
          <h3 className="text-3xl font-bold uppercase leading-none sm:text-4xl">
            Play the next big hit
          </h3>
          <p className="mt-3 text-xs leading-relaxed text-white/90">
            Discover new digital games, fan favorites and fresh indie titles in one place. Fast
            browsing. Clear pricing. Easy add to cart flow.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" className={`${button} px-6`} onClick={() => shop.go("store")}>
              Shop now
            </button>
            <button type="button" className={`${ghostButton} px-6`} onClick={() => shop.go("cart")}>
              View cart
            </button>
          </div>
        </section>
        <section className={`${panel} p-4 sm:p-5`}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#edad2e]">Daily motivation</p>
          <h3 className="mt-1 text-lg uppercase">Level up your mindset</h3>
          <p className="mt-2 text-sm leading-relaxed">
            “A life of no limitations is the only state of living that you should always bargain
            for.”
          </p>
        </section>
      </div>
      <div className={`grid gap-3 ${shop.wide ? "lg:grid-cols-2" : ""}`}>
        <GameRow title="Best sellers" skus={bestSellers} shop={shop} />
        <GameRow title="Latest releases" skus={latestReleases} shop={shop} />
      </div>
    </div>
  );
}

export function GamesView({ shop }) {
  const [query, setQuery] = useState("");
  const results = games.filter((game) =>
    `${game.title} ${game.tags.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div>
      <h3 className="text-2xl">All games</h3>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by title or genre…"
        aria-label="Search games"
        className={`${input} mt-3`}
      />
      <p className="mt-2 text-[11px] text-[#acaed7]">
        {results.length} {results.length === 1 ? "game" : "games"}
      </p>
      <div
        className={`mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 ${shop.wide ? "lg:grid-cols-5" : ""}`}
      >
        {results.map((game) => (
          <GameCard key={game.sku} game={game} onOpen={() => shop.go("product", game.sku)} />
        ))}
      </div>
    </div>
  );
}

export function StoreView({ shop }) {
  const deals = games.filter((game) => game.oldPrice);

  return (
    <div>
      <h3 className="text-2xl leading-tight sm:text-3xl">
        Discover the best <span className="text-[#edad2e]">games</span> at LucaStars
      </h3>
      <section className="relative mt-4 overflow-hidden rounded-lg border-2 border-[#edad2e] bg-gradient-to-r from-[#1b2147] via-[#2b2a5e] to-[#1b2147] px-4 py-6 text-center">
        <Sparkles size={14} className="absolute left-6 top-3 text-[#edad2e]" aria-hidden="true" />
        <Sparkles size={14} className="absolute bottom-3 right-8 text-[#edad2e]" aria-hidden="true" />
        <p className="text-3xl text-[#edad2e] [text-shadow:0_0_18px_rgba(237,173,46,0.45)]">
          Weekend Deals
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-white/80">
          -50% on selected games
        </p>
      </section>
      <div className={`mt-3 grid grid-cols-2 gap-2 ${shop.wide ? "lg:grid-cols-4" : ""}`}>
        {deals.map((game) => (
          <GameCard key={game.sku} game={game} onOpen={() => shop.go("product", game.sku)} />
        ))}
      </div>
    </div>
  );
}

export function ProductView({ shop, sku }) {
  const game = findGame(sku);
  const gallery = game.gallery ?? [game.image];
  const [active, setActive] = useState(gallery[0]);
  const inCart = shop.inCart(game.sku);

  return (
    <div>
      <button type="button" className={backLink} onClick={() => shop.go("games")}>
        {"<--- Back to games"}
      </button>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <div className="border-2 border-[#4651a3] bg-[#384097] p-2">
          <img
            src={active}
            alt={`${game.title} screenshot`}
            className="aspect-square w-full border border-[#4651a3] object-cover"
          />
          {gallery.length > 1 ? (
            <div className="mt-2 grid grid-cols-5 gap-1.5">
              {gallery.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(src)}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={src === active}
                  className={`border-2 ${src === active ? "border-[#edad2e]" : "border-transparent opacity-75 hover:opacity-100"}`}
                >
                  <img src={src} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div>
          <h3 className="text-2xl leading-tight sm:text-3xl">{game.title}</h3>
          <Price game={game} className="mt-2 text-xl" />
          <button
            type="button"
            onClick={() => shop.addToCart(game.sku)}
            disabled={inCart}
            className={`${goldButton} mt-3`}
          >
            {inCart ? "In your cart ✓" : "Add to cart"}
          </button>
          {inCart ? (
            <button
              type="button"
              onClick={() => shop.go("cart")}
              className="ml-3 text-xs underline hover:text-[#edad2e]"
            >
              Go to cart
            </button>
          ) : null}
          <div className={`${panel} mt-3 bg-[#1b2147] p-3 text-xs leading-relaxed`}>
            {game.description}
          </div>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {game.tags.map((tag) => (
              <li key={tag} className="border border-[#4651a3] px-2 py-0.5 text-[10px] uppercase">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function AboutView() {
  return (
    <section className={`${panel} p-4 text-sm leading-relaxed`}>
      <h3 className="text-2xl">About LucaStars</h3>
      <p className="mt-3">
        LucaStars is a digital game store we built as a school project at the HvA. The real shop
        is written in TypeScript with web components, a REST API and a MySQL database.
      </p>
      <p className="mt-3 text-[#acaed7]">
        This is a small React rebuild for my portfolio. It uses sample data, so nothing is saved
        and no payment is made. Try adding games to your cart, applying a promo code, and placing
        an order.
      </p>
    </section>
  );
}
