import { User } from "lucide-react";
import { euro } from "./games";
import { panel } from "./styles";

export function ProfileView({ shop }) {
  const spent = shop.orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="space-y-3">
      <section className={`${panel} flex items-center gap-4 p-4`}>
        <div className="grid h-16 w-16 shrink-0 place-items-center border-2 border-[#edad2e] bg-[#1b2147]">
          <User size={34} className="fill-[#edad2e] text-[#edad2e]" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-2xl">demo_player</h3>
          <p className="text-[11px] text-[#acaed7]">Member since today</p>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-3">
        <section className={`${panel} p-3`}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#acaed7]">Total spent</p>
          <p className="mt-1 text-2xl text-[#edad2e]">{euro(spent)}</p>
        </section>
        <section className={`${panel} p-3`}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#acaed7]">Orders</p>
          <p className="mt-1 text-2xl">{shop.orders.length}</p>
        </section>
      </div>

      <section className={`${panel} p-3`}>
        <h4 className="text-lg">Order history</h4>
        {shop.orders.length === 0 ? (
          <p className="mt-2 text-xs text-[#acaed7]">
            No orders yet. Place an order in the demo and it shows up here.
          </p>
        ) : (
          <ul className="mt-2 space-y-2">
            {shop.orders.map((order) => (
              <li key={order.id} className="border border-[#4651a3] bg-[#1b2147] p-2 text-xs">
                <div className="flex justify-between gap-2">
                  <span className="text-[#edad2e]">#{order.id}</span>
                  <span>{euro(order.total)}</span>
                </div>
                <p className="mt-1 text-[#acaed7]">
                  {order.date} · {order.games.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
