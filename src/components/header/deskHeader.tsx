"use client";

import {
  Box,
  Divider,
  HStack,
  IconButton,
  Image,
  Spacer,
} from "@yamada-ui/react";
import GithubIcon from "../githubIcon";
import React from "react";
import { useRouter } from "next/navigation";

export default function DeskHeader() {
  const router = useRouter();
  return (
    <Box pos="sticky" h="72px" as="header" top={0} zIndex={99}>
      <Box bgColor="#121212" p={4}>
        <HStack justifyContent="space-around">
          <Image src="logo-w.png" alt="logo" h="40px" />
          <Spacer />
          <IconButton
            variant="ghost"
            icon={<GithubIcon />}
            onClick={() => router.push("http://github.com/HongoMCC")}
            size="md"
            color="white"
            colorScheme="neutral"
          />
          <IconButton
            variant="ghost"
            icon={
              <Image
                src="qiita-white-icon.png"
                alt="qiita"
                maxH="60%"
                maxW="60%"
              />
            }
            onClick={() =>
              router.push("https://qiita.com/organizations/HongoMCC")
            }
            size="md"
            color="white"
            colorScheme="neutral"
          />
        </HStack>
      </Box>
      <Divider />
    </Box>
  );
}
