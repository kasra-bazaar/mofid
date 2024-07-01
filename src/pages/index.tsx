import { type NextPage } from "next";
import Head from "next/head";
import { useTranslations } from "next-intl";

import { RainbowBox } from "components/sections";
import { Markets } from "modules/markets";

const Home: NextPage = () => {
  const t = useTranslations("practices");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-6xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-center sm:text-6xl">
              {t("title")}
            </h1>
            <p className="mb-10 text-lg leading-8 text-gray-600 sm:text-center">
              {t("description")}
            </p>
            <RainbowBox>
              <Markets />
            </RainbowBox>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
