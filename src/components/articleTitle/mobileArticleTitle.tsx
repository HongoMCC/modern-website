"use client";

import { HStack, Heading, Separator, VStack } from "@yamada-ui/react";
import type { ArticleTitleProps } from "../articleTitle";
import { JetBrains_Mono } from "next/font/google";
const MonoFont = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
});
export default function MobileArticleTitle(props: ArticleTitleProps) {
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
      <VStack gap={0}>
        <Heading
          textColor="white"
          fontFamily={MonoFont.style.fontFamily}
          size="lg"
        >
          {props.en}
        </Heading>
        <Heading textColor="white" size="xs">
          {props.ja}
        </Heading>
      </VStack>
    </HStack>
  );
}
