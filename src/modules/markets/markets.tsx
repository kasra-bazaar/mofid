import { FormProvider, useForm } from "react-hook-form";

import { MarketsFooter } from "./marketsFooter";
import { MarketsHead } from "./marketsHead";
import { MarketsList } from "./marketsList";

import type { MarketsQuery } from "api/category";

export const Markets = () => {
  const methods = useForm<MarketsQuery>({
    defaultValues: {
      page: 1,
      per_page: 10,
      price_change_percentage: ["7d", "24h"],
    },
  });

  return (
    <FormProvider {...methods}>
      <MarketsHead />
      <MarketsList />
      <MarketsFooter />
    </FormProvider>
  );
};
