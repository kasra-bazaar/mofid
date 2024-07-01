import { useTranslations } from "next-intl";
import { useWatch } from "react-hook-form";

import type { MarketsQuery } from "api/category";
import { useMarketsAPI } from "api/hooks";
import { Button } from "components/elements";

export const MarketsSkeleton = () => {
  const t = useTranslations("markets.skeleton");

  const values = useWatch<MarketsQuery>();

  const {
    error,
    refetch,
    isLoading,
    data: markets,
  } = useMarketsAPI(
    {
      ...values,
      vs_currency: String(values.vs_currency),
    },
    { enabled: !!values.vs_currency }
  );

  if (isLoading) {
    return (
      <ul className="w-full py-2">
        {Array(values.per_page)
          .fill(null)
          .map((_, index) => (
            <li
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="mb-1 block h-16 w-full animate-pulse rounded-md bg-gray-300"
            />
          ))}
      </ul>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="my-2 flex items-center justify-center rounded-md bg-red-50 p-4 sm:p-10"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="mb-2">{t("error")}</p>
          <Button
            color="danger"
            variant="outlined"
            onClick={() => void refetch()}
          >
            {t("retry")}
          </Button>
        </div>
      </div>
    );
  }

  if (!markets?.length) {
    return (
      <div
        role="alert"
        className="my-2 flex items-center justify-center rounded-md bg-gray-50 p-4 sm:p-10"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="mb-2">{t("noData")}</p>
        </div>
      </div>
    );
  }

  return null;
};
