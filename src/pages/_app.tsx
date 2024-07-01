import { QueryClientProvider } from "@tanstack/react-query";
import { type AppType } from "next/dist/shared/lib/utils";
import type { AbstractIntlMessages } from "next-intl";
import { NextIntlProvider } from "next-intl";

import { queryClient } from "api/clients";
import { Header, Wallpaper } from "components/layout";
import en from "translation/en.json";
import fa from "translation/fa.json";

import "../styles/globals.css";

const languages: Record<string, AbstractIntlMessages> = {
  en,
  fa,
};

const MyApp: AppType = ({ Component, pageProps, router }) => {
  const locale =
    (router as { state?: { locale?: string } })?.state?.locale ?? "en";
  const messages = languages[locale] ?? languages["en"];

  return (
    <NextIntlProvider messages={messages}>
      <QueryClientProvider client={queryClient}>
        <Wallpaper />
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </NextIntlProvider>
  );
};

export default MyApp;
