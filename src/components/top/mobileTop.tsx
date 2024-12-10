"use client";

import {
  Box,
  Center,
  Heading,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  VStack,
  Fade,
} from "@yamada-ui/react";
import TypeIt from "typeit-react";
import { JetBrains_Mono } from "next/font/google";
import { MdArrowDownward } from "react-icons/md";

import Marquee from "react-fast-marquee";
import { TopProps } from "../top";
import { useState } from "react";

const MonoFont = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
});
export default function MobileTop(props: TopProps) {
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bgColor="#121212"
      height="calc(100svh - 72px)"
      w="100vw"
      overflow="hidden"
    >
      <Box
        h="calc(100svh - 72px)"
        position="absolute"
        top="72px"
        w="100vw"
        overflow="hidden"
        zIndex={1}
      >
        <Marquee
          speed={10}
          style={{
            transform: "none",
            position: "relative",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          <Image
            src="monitorman-bw.webp"
            alt="background"
            objectFit="cover"
            h="calc(100svh - 72px)"
            w="100vw"
            overflow={"hidden"}
          />
        </Marquee>
      </Box>
      <VStack
        p={4}
        position="absolute"
        bottom="100px"
        //カッター型にする
        clipPath="polygon(0 0, 0 100%, 60% 100%, 80% 0)"
        zIndex={10}
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
            fontSize="sm"
            w="100px"
            textAlign="center"
            border="2px solid #ebebeb"
            borderRadius="md"
            p={2}
            mr={4}
          >
            <Fade isOpen={isOpen} duration={0.5}>
              {displayWordJa}
            </Fade>
          </Heading>
          <Heading textColor="white" fontSize="sm">
            をハックしよう。
          </Heading>
        </HStack>
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
          aria-label="scroll"
        />
      </Center>
    </Box>
  );
}
