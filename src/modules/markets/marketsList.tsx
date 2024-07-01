import { useTranslations } from "next-intl";
import { useWatch } from "react-hook-form";

import { MarketsSkeleton } from "./marketsSkeleton";

import type { MarketsQuery } from "api/category";
import { useMarketsAPI } from "api/hooks";
import { Avatar } from "components/elements";
import { Percentage } from "components/sections";

export const MarketsList = () => {
  const t = useTranslations("markets.list");

  const values = useWatch<MarketsQuery>();
  const startAt = (Number(values.page) - 1) * Number(values.per_page);

  const { data: markets } = useMarketsAPI(
    {
      ...values,
      vs_currency: String(values.vs_currency),
    },
    { enabled: !!values.vs_currency }
  );

  return (
    <div className="border-gray-30 relative overflow-x-auto border-t">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr className="text-center">
            <th scope="col" className="px-2 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3 ltr:text-left rtl:text-right">
              {t("coin")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("price")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("24h")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("7d")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("marketCap")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("totalVolume")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("circulatingSupply")}
            </th>
          </tr>
        </thead>
        <tbody>
          {markets?.map((market, index) => (
            <tr key={market.id} className="border-b bg-white">
              <td className="px-2 py-4">{startAt + index + 1}</td>
              <th scope="row" className="flex items-center gap-2 px-6 py-4">
                <Avatar size={32} name={market.name} src={market.image} />
                <div className="flex flex-col">
                  <span className="whitespace-nowrap font-medium text-gray-900">
                    {market.name}
                  </span>
                  <span className="text-xs font-light text-gray-400 ltr:text-left rtl:text-right">
                    {market.symbol.toUpperCase()}
                  </span>
                </div>
              </th>
              <td dir="ltr" className="px-6 py-4 text-center">
                {market.current_price}
              </td>
              <td dir="ltr" className="px-6 py-4 text-center">
                <Percentage
                  value={market.price_change_percentage_24h_in_currency}
                />
              </td>
              <td dir="ltr" className="px-6 py-4 text-center">
                <Percentage
                  value={market.price_change_percentage_7d_in_currency}
                />
              </td>
              <td dir="ltr" className="px-6 py-4 text-center">
                {market.market_cap}
              </td>
              <td dir="ltr" className="px-6 py-4 text-center">
                {market.total_volume}
              </td>
              <td dir="ltr" className="px-6 py-4 text-center">
                {market.circulating_supply}
                <span className="text-xs font-light text-gray-400">
                  {" "}
                  {market.symbol.toUpperCase()}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <MarketsSkeleton />
    </div>
  );
};
