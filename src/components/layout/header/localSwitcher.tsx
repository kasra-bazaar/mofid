import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

import { Select } from "components/forms";
import { getDirection } from "utils/getDirection";

export const LocalSwitcher = () => {
  const router = useRouter();
  const t = useTranslations("header.language");

  return (
    <Select
      value={router.locale}
      className="min-w-[8rem]"
      placeholder={t("placeholder")}
      options={[
        {
          value: "en",
          label: t("english"),
          adornment: <span>🇺🇸</span>,
        },
        {
          value: "fa",
          label: t("persian"),
          adornment: <span>🇮🇷</span>,
        },
      ]}
      onChange={(value) => {
        void router.replace("/", "/", { locale: value });
        document
          .getElementsByTagName("html")
          .item(0)
          ?.setAttribute("dir", getDirection(value));
      }}
    />
  );
};
