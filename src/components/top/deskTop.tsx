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
export default function DeskTop(props: TopProps) {
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
              src="monitorman-bw.jpg"
              alt="background"
              objectFit="cover"
              h={"100%"}
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
                  .type(props.words[0])
                  .pause(500)
                  .delete()
                  .type(props.words[1])
                  .pause(500)
                  .delete()
                  .type(props.words[2])
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
        <Heading textColor="white">本郷をハックしよう。</Heading>

        <Center ref={props.contentRef} w="50%" flexGrow={1} h="full">
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
          />
        </Center>
      </VStack>
    </Box>
  );
}
