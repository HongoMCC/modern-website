"use client";

import { Box, Divider, HStack, Image, Spacer } from "@yamada-ui/react";
import GithubIcon from "../githubIcon";
import React from "react";
import XIcon from "../xIcon";
import QiitaIcon from "../qiitaIcon";

import SocialButton from "../socialButton";

export default function MobileHeader() {
  return (
    <Box pos="sticky" h="72px" as="header" top={0} zIndex={99}>
      <Box bgColor="#121212" p={4}>
        <HStack justifyContent="space-around">
          <Image src="logo-w.webp" alt="logo" h="40px" />
          <Spacer />
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
      </Box>
      <Divider />
    </Box>
  );
}
