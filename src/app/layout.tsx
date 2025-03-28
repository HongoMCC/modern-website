"use client";

import { ReactNode, Suspense } from "react";

import { UIProvider, ColorModeScript, ThemeConfig } from "@yamada-ui/react";
import { Noto_Sans_JP } from "next/font/google";
import customTheme from "../theme";
import Loading from "./loading";

const NotoFont = Noto_Sans_JP({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "本郷学園マイコン部",
  url: "https://www.hongomcc.net/",
  logo: "https://www.hongomcc.net/logo-b.webp",
  sameAs: [
    "https://x.com/HongoMCC",
    "https://www.youtube.com/@本郷マイコン部公式",
    "https://github.com/HongoMCC",
    "https://qiita.com/organizations/HongoMCC",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressLocality: "Toshima",
    addressRegion: "Tokyo",
    postalCode: "170-0003",
    streetAddress: "4-11-1 Komagome",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.hongomcc.net/blogs/?s={search_term}",
    "query-input": "required name=search_term",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
        <meta charSet="UTF-8" />
        <meta httpEquiv="content-language" content="ja" />
        <link rel="preload" as="image" href="/monitorman-bw.webp" />
        <link rel="preload" as="image" href="/monitorIcon-bw.webp" />
        <link rel="icon" type="image/png" href="/monitorman-m.webp" />
        <link rel="apple-touch-icon" href="/monitorman-m.webp" />
        <meta
          name="keywords"
          content="本郷学園, マイコン部, 本郷中学校, 本郷高等学校"
        />
        <meta name="theme-color" content="#121212" />
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
          content="https://www.hongomcc.net/thumbnail.webp"
        />
        <meta property="og:site_name" content="Hongo M.C.C. Website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HongoMCC" />
        <meta name="twitter:creator" content="@HongoMCC" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
