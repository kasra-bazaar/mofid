import type { Client } from "api/clients";
import { client } from "api/clients";

const CoinsRoutePrefix = "coins/";

/* -------------------------------------------------------------------------- */
/*                                   Markets                                  */
/* -------------------------------------------------------------------------- */

const MarketsRoute = "markets";

export type Roi = {
  times: number;
  currency: string;
  percentage: number;
};

export type Market = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation?: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply?: number | null;
  max_supply?: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi?: Roi | null;
  last_updated: string;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_24h_in_currency: number;
};

export type Order =
  | "market_cap_desc"
  | "gecko_desc"
  | "gecko_asc"
  | "market_cap_asc"
  | "market_cap_desc"
  | "volume_asc"
  | "volume_desc"
  | "id_asc"
  | "id_desc";

export type PriceChange = "1h" | "24h" | "7d" | "14d" | "30d" | "200d" | "1y";

export type MarketsRes = Market[];
export type MarketsQuery = {
  vs_currency: string;
  ids?: string[];
  category?: string;
  order?: Order;
  per_page?: number;
  page?: number;
  sparkline?: boolean;
  price_change_percentage?: PriceChange[];
};

export const MarketsAPI: Client<
  unknown,
  MarketsRes,
  unknown,
  MarketsQuery
> = async (queries) =>
  await client.get(CoinsRoutePrefix.concat(MarketsRoute), { params: queries });
