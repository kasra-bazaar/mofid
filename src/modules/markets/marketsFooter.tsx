import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import type { MarketsQuery } from "api/category";
import { Button } from "components/elements";
import { SelectForm } from "components/forms";

const PERPAGE_OPTIONS = [
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 50,
    label: "50",
  },
];

export const MarketsFooter = () => {
  const t = useTranslations("markets.footer");

  const methods = useFormContext<MarketsQuery>();
  const { setValue, getValues } = methods;

  const onPrev = () => {
    const current = getValues().page ?? 1;
    return setValue("page", Math.max(1, current - 1));
  };

  const onNext = () => {
    const current = getValues().page ?? 1;
    return setValue("page", Math.min(20, current + 1));
  };

  return (
    <div className="mt-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
      <SelectForm
        name="per_page"
        options={PERPAGE_OPTIONS}
        onChange={() => setValue("page", 1)}
        className="order-2 w-full sm:order-1 sm:w-fit"
      />
      <div className="order-1 flex w-full gap-2 sm:order-2 sm:w-fit">
        <Button
          color="gray"
          onClick={onPrev}
          variant="outlined"
          className="flex-1 ltr:order-1 rtl:order-2 sm:flex-auto"
        >
          <ChevronLeftIcon
            aria-hidden="true"
            className="h-5 w-5 text-gray-400 ltr:order-1 rtl:order-2"
          />
          <span className="ltr:order-2 rtl:order-1">{t("prev")}</span>
        </Button>
        <Button
          variant="outlined"
          color="gray"
          onClick={onNext}
          className="flex-1 ltr:order-2 rtl:order-1 sm:flex-auto"
        >
          <span className="ltr:order-1 rtl:order-2">{t("next")}</span>
          <ChevronRightIcon
            aria-hidden="true"
            className="h-5 w-5 text-gray-400 ltr:order-2 rtl:order-1"
          />
        </Button>
      </div>
    </div>
  );
};
