import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

import type { SupportedVSCurrenciesRes } from "api/category";
import { SupportedVSCurrenciesAPI } from "api/category";

export const SUPPORTED_VS_CURRENCIES_KEY = "SupportedVSCurrencies";

type Data = SupportedVSCurrenciesRes;
type Options = Omit<UseQueryOptions<Data>, "queryKey" | "queryFn">;

export const useSupportedVSCurrenciesAPI = (options?: Options) => {
  return useQuery<Data>(
    [SUPPORTED_VS_CURRENCIES_KEY],
    async () => await SupportedVSCurrenciesAPI({}),
    options
  );
};
