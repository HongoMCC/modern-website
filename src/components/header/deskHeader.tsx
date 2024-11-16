"use client";

import {
  Box,
  Divider,
  HStack,
  IconButton,
  Image,
  Indicator,
  Spacer,
  useDisclosure,
} from "@yamada-ui/react";
import GithubIcon from "../githubIcon";
import React from "react";
import XIcon from "../xIcon";
import QiitaIcon from "../qiitaIcon";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";

export default function DeskHeader() {
  const {
    onOpen: githubOnOpen,
    onClose: githubOnClose,
    isOpen: githubIsOpen,
  } = useDisclosure();
  const {
    onOpen: qiitaOnOpen,
    onClose: qiitaOnClose,
    isOpen: qiitaIsOpen,
  } = useDisclosure();
  const {
    onOpen: xOnOpen,
    onClose: xOnClose,
    isOpen: xIsOpen,
  } = useDisclosure();
  return (
    <Box pos="sticky" h="72px" as="header" top={0} zIndex={99}>
      <Box bgColor="#121212" p={4}>
        <HStack justifyContent="space-around">
          <Image src="logo-w.png" alt="logo" h="40px" />
          <Spacer />
          <Indicator
            label={<MdOpenInNew />}
            p={1}
            isDisabled={!githubIsOpen}
            ping
          >
            <IconButton
              variant="ghost"
              icon={<GithubIcon />}
              as={Link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/HongoMCC"
              size="md"
              color="white"
              _hover={{ bgColor: "gray.700" }}
              onMouseEnter={githubOnOpen}
              onMouseLeave={githubOnClose}
            />
          </Indicator>
          <Indicator
            label={<MdOpenInNew />}
            p={1}
            isDisabled={!qiitaIsOpen}
            ping
          >
            <IconButton
              variant="ghost"
              icon={<QiitaIcon />}
              as={Link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://qiita.com/organizations/HongoMCC"
              size="md"
              color="white"
              _hover={{ bgColor: "gray.700" }}
              onMouseEnter={qiitaOnOpen}
              onMouseLeave={qiitaOnClose}
            />
          </Indicator>
          <Indicator label={<MdOpenInNew />} p={1} isDisabled={!xIsOpen} ping>
            <IconButton
              variant="ghost"
              icon={<XIcon />}
              as={Link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://x.com/HongoMCC"
              size="md"
              color="white"
              _hover={{ bgColor: "gray.700" }}
              onMouseEnter={xOnOpen}
              onMouseLeave={xOnClose}
            />
          </Indicator>
        </HStack>
      </Box>
      <Divider />
    </Box>
  );
}
