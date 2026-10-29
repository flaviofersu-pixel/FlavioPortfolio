import { euro } from "./games";
import { button } from "./styles";

export function Price({ game, className = "" }) {
  if (!game.oldPrice) {
    return <span className={`text-[#edad2e] ${className}`}>{euro(game.price)}</span>;
  }
  return (
    <span className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      <span className="text-[#acaed7] line-through">{euro(game.oldPrice)}</span>
      <span className="text-white">{euro(game.price)}</span>
      <span className="bg-[#edad2e] px-1 text-[10px] text-[#111427]">-50%</span>
    </span>
  );
}

export function GameCard({ game, onOpen }) {
  return (
    <article className="flex flex-col border-2 border-[#4651a3] bg-[#20275e]">
      <button type="button" onClick={onOpen} className="block" tabIndex={-1} aria-hidden="true">
        <img
          src={game.image}
          alt=""
          className="aspect-square w-full object-cover transition hover:brightness-110"
        />
      </button>
      <div className="flex flex-1 flex-col p-2">
        <h4 className="text-xs leading-snug sm:text-sm">{game.title}</h4>
        <Price game={game} className="mt-1 text-xs sm:text-sm" />
        <button
          type="button"
          onClick={onOpen}
          className={`${button} mt-auto w-full`}
          aria-label={`View ${game.title}`}
        >
          View
        </button>
      </div>
    </article>
  );
}

export function SuggestionCard({ game, onOpen, onAdd }) {
  return (
    <article className="flex flex-col bg-[#20275e]">
      <button type="button" onClick={onOpen} className="block" tabIndex={-1} aria-hidden="true">
        <img src={game.image} alt="" className="aspect-video w-full object-cover" />
      </button>
      <div className="flex flex-1 flex-col gap-2 p-2">
        <div className="flex items-start justify-between gap-2 text-[11px]">
          <button type="button" onClick={onOpen} className="text-left hover:text-[#edad2e]">
            {game.title}
          </button>
          <span className="shrink-0 text-[#4cff88]">{euro(game.price)}</span>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="mt-auto w-full bg-[#384097] py-1.5 font-sans text-xs font-semibold text-white transition hover:bg-[#4651a3]"
          aria-label={`Add ${game.title} to cart`}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}
