"use client";

import { HStack, Heading, Separator } from "@yamada-ui/react";
import type { ArticleTitleProps } from "../articleTitle";
import { JetBrains_Mono } from "next/font/google";
const MonoFont = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
});
export default function DeskArticleTitle(props: ArticleTitleProps) {
  const padNo = props.no.toString().padStart(2, "0");
  return (
    <HStack w="100%">
      <Heading
        textColor="subtle"
        fontFamily={MonoFont.style.fontFamily}
        size="2xl"
      >
        {padNo}
      </Heading>
      <Separator h="60px" orientation="vertical" />
      <Heading textColor="white" fontFamily={MonoFont.style.fontFamily} w="20%">
        {props.en}
      </Heading>
      <Heading textColor="white" size="sm">
        {props.ja}
      </Heading>
    </HStack>
  );
}
