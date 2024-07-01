import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import type { MarketsQuery } from "api/category";
import { useSupportedVSCurrenciesAPI } from "api/hooks";
import { SelectForm } from "components/forms";

export const MarketsHead = () => {
  const t = useTranslations("markets.head");

  const methods = useFormContext<MarketsQuery>();
  const { setValue } = methods;

  const { data: currencies, isLoading } = useSupportedVSCurrenciesAPI({
    onSuccess: (data) => {
      setValue("vs_currency", String(data.at(0)));
    },
  });

  const currencyOptions = currencies?.map((currency) => ({
    label: currency.toUpperCase(),
    value: currency,
  }));

  return (
    <div className="mb-4 flex items-center gap-4">
      <div className="flex-1">
        <label htmlFor="vs_currency" className="">
          {t("selectCurrency")}
        </label>
        <p className="text-sm font-light text-gray-400">
          {t("selectCurrencyDescription")}
        </p>
      </div>
      {isLoading ? (
        <div className="mb-2 block h-9 w-20 animate-pulse rounded-md bg-gray-200" />
      ) : (
        <SelectForm
          name="vs_currency"
          className="min-w-[7rem]"
          options={currencyOptions}
          placeholder="Choose your currency"
          onChange={() => setValue("page", 1)}
        />
      )}
    </div>
  );
};
