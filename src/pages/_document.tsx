/* eslint-disable @next/next/no-css-tags */
import type { DocumentContext } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";

import { getDirection } from "utils/getDirection";

class MofidDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = ctx?.locale || "en";
    return { ...initialProps, locale };
  }

  render() {
    const { locale } = this.props as unknown as {
      locale: string;
    };

    return (
      <Html lang="en" dir={getDirection(locale)}>
        <Head>
          <link href="fonts/styles.css" rel="stylesheet" />
        </Head>
        <body className="isolate bg-white text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MofidDocument;
