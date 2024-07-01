import type { Client } from "api/clients";
import { client } from "api/clients";

const SimpleRoutePrefix = "simple/";

/* -------------------------------------------------------------------------- */
/*                            SupportedVSCurrencies                           */
/* -------------------------------------------------------------------------- */

const SupportedVSCurrenciesRoute = "supported_vs_currencies";

export type SupportedVSCurrenciesRes = string[];

export const SupportedVSCurrenciesAPI: Client<
  unknown,
  SupportedVSCurrenciesRes,
  unknown,
  unknown
> = async () =>
  await client.get(SimpleRoutePrefix.concat(SupportedVSCurrenciesRoute));
