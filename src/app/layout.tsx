"use client";

import { ReactNode, Suspense } from "react";

import { UIProvider, ColorModeScript, ThemeConfig } from "@yamada-ui/react";
import { Noto_Sans_JP } from "next/font/google";
import customTheme from "../theme";
import Loading from "./loading";

const NotoFont = Noto_Sans_JP({
  weight: ["100", "200", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const config: ThemeConfig = {
  initialColorMode: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="public/monitorIcon-bw.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ColorModeScript
          type="cookie"
          nonce="testing"
          initialColorMode={config.initialColorMode}
        />
        <title>Top | 本郷学園マイコン部</title>
        <meta
          name="description"
          content="東京都巣鴨にある中高一貫制男子校、本郷中学校・高等学校のマイコン部HPです。活動内容などを掲載しています。"
        />
        <meta
          property="og:description"
          content="東京都巣鴨にある中高一貫制男子校、本郷中学校・高等学校のマイコン部HPです。活動内容などを掲載しています。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top | 本郷学園マイコン部" />
        <meta property="og:url" content="https://www.hongomcc.net/" />
        <meta
          property="og:image"
          content="https://www.hongomcc.net/thumbnail.jpg"
        />
        <meta property="og:site_name" content="Hongo M.C.C. Website" />
        <meta property="og:locale" content="ja_JP" />
      </head>
      <body className={`${NotoFont.variable}`}>
        <Suspense fallback={<Loading />}>
          <UIProvider theme={customTheme} config={config}>
            {children}
          </UIProvider>
        </Suspense>
      </body>
    </html>
  );
}
