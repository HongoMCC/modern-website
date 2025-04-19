"use client";

import {
  Box,
  Center,
  Fade,
  Heading,
  HStack,
  IconButton,
  Image,
  Link as UILink,
  Spacer,
  Text,
  useDisclosure,
  VStack,
  Icon,
} from "@yamada-ui/react";
import Link from "next/link";
import TypeIt from "typeit-react";
import { JetBrains_Mono } from "next/font/google";
import { MdArrowDownward, MdOpenInNew } from "react-icons/md";

import Marquee from "react-fast-marquee";
import { TopProps } from "../top";
import { useState } from "react";

const MonoFont = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
});
export default function DeskTop(props: TopProps) {
  const [displayWordJa, setDisplayWordJa] = useState(
    props.wordsJa[props.wordsJa.length - 1]
  );
  function afterString() {
    onClose();
    setTimeout(() => {
      onOpen();
    }, 300);
    setTimeout(() => {
      const index = props.wordsJa.indexOf(displayWordJa);
      setDisplayWordJa(props.wordsJa[(index + 1) % props.wordsJa.length]);
    }, 300);
  }
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <Box bgColor="#121212" height="calc(100vh - 72px)" w="100vw">
      <Box
        clipPath="polygon(70% 0, 100% 0, 100% 100%, 30% 100%)"
        h="calc(100vh - 72px)"
        w="70%"
        position="absolute"
        right="0"
      >
        <Marquee speed={10}>
          <HStack gap={0} w={"100%"} h="calc(100vh - 72px)">
            <Image
              src="monitorman-bw.webp"
              alt="background"
              objectFit="cover"
              h={"100%"}
              rel="preload"
            />
          </HStack>
        </Marquee>
      </Box>
      <VStack p={4} h="100%">
        <Box>
          <Heading
            fontSize="5vw"
            fontWeight="medium"
            textColor="white"
            className={MonoFont.className}
            fontFamily={MonoFont.style.fontFamily}
          >
            Hack
          </Heading>
          <Heading
            fontSize="5vw"
            fontWeight="medium"
            textColor="white"
            className={MonoFont.className}
            fontFamily={MonoFont.style.fontFamily}
          >
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .pause(400)
                  .type(props.wordsEn[0])
                  .pause(700)
                  .delete()
                  .pause(400)
                  .type(props.wordsEn[1])
                  .pause(700)
                  .delete()
                  .pause(400)
                  .type(props.wordsEn[2])
                  .pause(500)
                  .go();
                return instance;
              }}
              options={{
                loop: true,
                speed: 100,
                beforeString: afterString,
              }}
            />
          </Heading>
        </Box>
        <HStack gap={0}>
          <Heading
            textColor="white"
            w="200px"
            textAlign="center"
            border="2px solid #ebebeb"
            borderRadius="md"
            p={2}
            mr={4}
          >
            <Fade open={open} duration={0.5}>
              {displayWordJa}
            </Fade>
          </Heading>
          <Heading textColor="white">をハックしよう。</Heading>
        </HStack>
        {/* <Spacer />
        <Center w="50%" flexGrow={1} h="full">
          <UILink
            as={Link}
            href="https://qiita.com/advent-calendar/2024/hongomcc"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Qiita Advent Calender"
          >
            Qiita Advent Calender 実施中！詳細はこちら
            <Icon as={MdOpenInNew} />
          </UILink>
        </Center>
        <Spacer /> */}
        <Center ref={props.contentRef} w="50%" flexGrow={1} h="full">
          <VStack alignItems={"center"} justifyContent={"center"} gap={0}>
            <Text
              textColor="white"
              fontSize="md"
              className={MonoFont.className}
              fontFamily={MonoFont.style.fontFamily}
              textAlign={"center"}
              w={"100%"}
            >
              SCROLL
            </Text>
            <IconButton
              icon={<MdArrowDownward />}
              size="lg"
              color="white"
              variant={"ghost"}
              _hover={{ bgColor: "gray.700" }}
              onClick={() =>
                props.contentRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              aria-label="Scroll"
            />
          </VStack>
        </Center>
      </VStack>
    </Box>
  );
}
