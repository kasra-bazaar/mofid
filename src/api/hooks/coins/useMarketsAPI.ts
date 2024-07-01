import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

import type { MarketsQuery, MarketsRes } from "api/category";
import { MarketsAPI } from "api/category";

export const MARKETS_KEY = "Markets";

type Data = MarketsRes;
type Param = MarketsQuery;
type Options = Omit<UseQueryOptions<Data>, "queryKey" | "queryFn">;

export const useMarketsAPI = (params: Param, options?: Options) => {
  return useQuery<Data>(
    [MARKETS_KEY, params],
    async () => await MarketsAPI(params),
    options
  );
};
