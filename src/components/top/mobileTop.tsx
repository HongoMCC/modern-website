"use client";

import {
  Box,
  Center,
  Heading,
  HStack,
  IconButton,
  Image,
  VStack,
} from "@yamada-ui/react";
import TypeIt from "typeit-react";
import { JetBrains_Mono } from "next/font/google";
import { MdArrowDownward } from "react-icons/md";

import Marquee from "react-fast-marquee";
import { TopProps } from "../top";

const MonoFont = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
});
export default function MobileTop(props: TopProps) {
  return (
    <Box bgColor="#121212" height="calc(100svh - 72px)" w="100vw">
      <Box
        h="calc(100svh - 72px)"
        position="absolute"
        top="72px"
        maxW="100%"
        overflow="hidden"
      >
        <Marquee speed={10}>
          <HStack gap={0} w="100vw" h="calc(100svh - 72px)">
            <Image
              src="monitorman-bw.jpg"
              alt="background"
              objectFit="cover"
              h={"100%"}
              w={"100vw"}
            />
          </HStack>
        </Marquee>
      </Box>
      <VStack
        p={4}
        position="absolute"
        bottom="100px"
        //カッター型にする
        clipPath="polygon(0 0, 0 100%, 60% 100%, 80% 0)"
        zIndex={99}
        bg="#121212"
      >
        <Box>
          <Heading
            fontSize="2xl"
            fontWeight="medium"
            textColor="white"
            className={MonoFont.className}
            fontFamily={MonoFont.style.fontFamily}
          >
            Hack
          </Heading>
          <Heading
            fontSize="2xl"
            fontWeight="medium"
            textColor="white"
            className={MonoFont.className}
            fontFamily={MonoFont.style.fontFamily}
          >
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .type(props.wordsEn[0])
                  .pause(500)
                  .delete()
                  .type(props.wordsEn[1])
                  .pause(500)
                  .delete()
                  .type(props.wordsEn[2])
                  .pause(500)
                  .go();
                return instance;
              }}
              options={{
                loop: true,
                speed: 100,
              }}
            />
          </Heading>
        </Box>
        <Heading textColor="white" size="sm">
          本郷をハックしよう。
        </Heading>
      </VStack>
      <Center
        ref={props.contentRef}
        w="100%"
        pos="absolute"
        bottom="40px"
        zIndex={999}
      >
        <IconButton
          icon={<MdArrowDownward />}
          size="lg"
          color="#121212"
          variant="link"
          onClick={() =>
            props.contentRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
        />
      </Center>
    </Box>
  );
}
