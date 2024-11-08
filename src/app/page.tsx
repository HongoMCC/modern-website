"use client";

import {
  Box,
  Center,
  Heading,
  IconButton,
  Spacer,
  VStack,
} from "@yamada-ui/react";
import TypeIt from "typeit-react";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/header";
import { MdArrowDownward } from "react-icons/md";
const MonoFont = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
});
export default function Home() {
  const words = ["Hongo.", "myself.", "everything!"];
  return (
    <>
      <Header />
      <Box bgColor="#121212" height="calc(100vh - 72px)" w="100vw" p={4}>
        <VStack>
          <Box>
            <Heading
              fontSize="8em"
              fontWeight="medium"
              textColor="white"
              className={MonoFont.className}
              fontFamily={MonoFont.style.fontFamily}
            >
              Hack
            </Heading>
            <Heading
              fontSize="8em"
              fontWeight="medium"
              textColor="white"
              className={MonoFont.className}
              fontFamily={MonoFont.style.fontFamily}
            >
              <TypeIt
                getBeforeInit={(instance) => {
                  instance
                    .type(words[0])
                    .pause(500)
                    .delete()
                    .type(words[1])
                    .pause(500)
                    .delete()
                    .type(words[2])
                    .pause(500)
                    .go();
                  return instance;
                }}
                options={{
                  loop: true,
                  speed: 100,
                }}
              ></TypeIt>
            </Heading>
          </Box>
          <Heading textColor="white">本郷をハックしよう。</Heading>
          <Spacer />
          <Center>
            <IconButton
              icon={<MdArrowDownward />}
              size="lg"
              color="white"
              colorScheme="neutral"
              variant={"ghost"}
            />
          </Center>
        </VStack>
      </Box>
    </>
  );
}
