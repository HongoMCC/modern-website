"use client";

import {
  Box,
  Separator,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@yamada-ui/react";
import { JetBrains_Mono } from "next/font/google";

import { MdPlace, MdTimer } from "react-icons/md";
import GithubIcon from "@/components/githubIcon";
import QiitaIcon from "@/components/qiitaIcon";
import XIcon from "@/components/xIcon";
import SocialButton from "../socialButton";
const MonoFont = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
});

export default function DeskFooter() {
  return (
    <Box bgColor="#000000" h="50vh" w="100vw" p={4} as="footer">
      <Separator />
      <VStack p={4} h="100%" w="100%">
        <HStack w="100%" h="35%">
          <Image src="logo-w.webp" alt="logo" h="80%" p={4} />
          <Separator h="100%" orientation="vertical" />
          <VStack gap={0} maxH="100%">
            <Text textColor="white">本郷学園</Text>
            <Heading textColor="white">マイコン部</Heading>
            <Text textColor="white" fontFamily={MonoFont.style.fontFamily}>
              Hongo Micro Computer Club
            </Text>
          </VStack>
          <Spacer />
          <VStack
            gap={0.5}
            bgColor="#252525"
            borderRadius="md"
            p={4}
            m={2}
            h="100%"
            fontSize="2xs"
          >
            <HStack gap={0.5} justifySelf="flex-start">
              <MdPlace color="white" />
              <Heading
                textColor="white"
                size="xs"
                fontFamily={MonoFont.style.fontFamily}
              >
                Place
              </Heading>
            </HStack>
            <Text textColor="gray.100">〒170-0003</Text>
            <Text textColor="gray.100">東京都豊島区駒込4-11-1</Text>
            <Text textColor="gray.100">本郷中学校・高等学校</Text>
            <Text textColor="gray.100">5号館3階 第1・第2コンピュータ室</Text>
          </VStack>
          <VStack
            gap={0.5}
            bgColor="#252525"
            borderRadius="md"
            p={4}
            m={2}
            h="100%"
            fontSize="2xs"
          >
            <HStack gap={0.5} justifySelf="flex-start">
              <MdTimer color="white" />
              <Heading
                textColor="white"
                size="xs"
                fontFamily={MonoFont.style.fontFamily}
              >
                Time
              </Heading>
            </HStack>
            <HStack gap={0}>
              <VStack gap={0}>
                <Text textColor="gray.100">活動日</Text>
                <Text textColor="gray.100">活動時間</Text>
              </VStack>
              <VStack gap={0}>
                <Text textColor="gray.100">：毎週月曜日・金曜日</Text>
                <Text textColor="gray.100">：15:30-18:00</Text>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
        <HStack w="100%" ml={4} h="10%">
          <SocialButton
            icon={<GithubIcon />}
            href="https://github.com/HongoMCC"
          />
          <SocialButton
            icon={<QiitaIcon />}
            href="https://qiita.com/organizations/HongoMCC"
          />
          <SocialButton icon={<XIcon />} href="https://x.com/HongoMCC" />
        </HStack>
        <Spacer />
        <Text
          textColor="gray"
          textAlign="center"
          fontFamily={MonoFont.style.fontFamily}
        >
          (C) 2024-2025 Hongo M.C.C. All Rights Reserved.
        </Text>
      </VStack>
    </Box>
  );
}
