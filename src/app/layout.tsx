"use client";

import { ReactNode } from "react";

import { UIProvider, ColorModeScript, ThemeConfig } from "@yamada-ui/react";
import { Noto_Sans_JP } from "next/font/google";
import customTheme from "../theme";

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
      <body className={`${NotoFont.variable}`}>
        <ColorModeScript type="cookie" nonce="testing" />
        <UIProvider theme={customTheme} config={config}>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
