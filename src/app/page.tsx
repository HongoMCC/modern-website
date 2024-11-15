"use client";
import React from "react";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@yamada-ui/react";
import TypeIt from "typeit-react";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/header";
import { MdArrowDownward } from "react-icons/md";
import { useRef } from "react";
import Gallery from "@/components/gallery";
import Marquee from "react-fast-marquee";
const MonoFont = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
});
export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const words = ["Hongo.", "yourself.", "everything!"];
  return (
    <>
      <Header />
      <Box bgColor="#121212" height="calc(100vh - 72px)" w="100vw">
        <Box
          clipPath="polygon(70% 0, 100% 0, 100% 100%, 30% 100%)"
          h="calc(100vh - 72px)"
          w="70%"
          position="absolute"
          right="0"
          bgImage="monitorman.jpg"
          bgSize="cover"
          bgPosition="left -40%"
          bgRepeat={"no-repeat"}
        />
        <VStack>
          <Box p={4}>
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
          <Center ref={contentRef}>
            <IconButton
              icon={<MdArrowDownward />}
              size="lg"
              color="white"
              colorScheme="neutral"
              variant={"ghost"}
              onClick={() =>
                contentRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            />
          </Center>
        </VStack>
      </Box>
      <Box bgColor="#121212" w="100vw" p={4}>
        <VStack>
          <HStack w="100%">
            <Heading
              textColor="subtle"
              fontFamily={MonoFont.style.fontFamily}
              size="2xl"
            >
              01
            </Heading>
            <Divider h="60px" orientation="vertical" />
            <Heading
              textColor="white"
              fontFamily={MonoFont.style.fontFamily}
              w="20%"
            >
              About
            </Heading>
            <Heading textColor="white" size="sm">
              マイコン部について
            </Heading>
          </HStack>
          <Text textColor="white">
            本郷学園マイコン部は、東京都巣鴨に位置する中高一貫制の男子校、本郷中学校・高等学校の文化部です。
            <br />
            さまざまな興味関心を持つ部員たちが集い、日夜跳梁跋扈しています。
          </Text>
        </VStack>
      </Box>
      <Box bgColor="#121212" w="100vw" p={4}>
        <VStack w="100%">
          <HStack w="100%">
            <Heading
              textColor="subtle"
              fontFamily={MonoFont.style.fontFamily}
              size="2xl"
            >
              02
            </Heading>
            <Divider h="60px" orientation="vertical" />
            <Heading
              textColor="white"
              fontFamily={MonoFont.style.fontFamily}
              w="20%"
            >
              Activities
            </Heading>
            <Heading textColor="white" size="sm">
              マイコン部の活動
            </Heading>
          </HStack>
          <Text textColor="white">マイコン部の活動内容は、</Text>
          <Center w="100%">
            <Center
              bgImage="focus.svg"
              bgSize="100%"
              bgPosition="center"
              bgRepeat="no-repeat"
              h="200px"
              w="70%"
            >
              <Heading textColor="white">
                「およそ技術に関連していれば何をしてもよい」
              </Heading>
            </Center>
          </Center>
          <Text textColor="white" textAlign="right">
            です。
          </Text>
          <Marquee pauseOnHover>
            <HStack>
              {[0, 1, 2].map((i) => (
                <React.Fragment key={i}>
                  <Gallery
                    bgImage="bot.jpeg"
                    avatarSrc="bot.jpeg"
                    title="ロボット班"
                    description="ロボットを作ります"
                    heading={
                      <>
                        ロボットを制御して
                        <wbr />
                        世界征服しよう
                      </>
                    }
                    subHeading={<>ロボット班の活動</>}
                  />
                  <Gallery
                    bgImage="pc.jpg"
                    avatarSrc="pc.jpg"
                    title="パソコン班"
                    description="ソフトウェア関連を総合して扱います"
                    heading={
                      <>
                        プログラミングで
                        <wbr />
                        自分の世界を創造しよう
                      </>
                    }
                    subHeading={<>PC班の活動</>}
                  />
                  <Gallery
                    bgImage="craft.jpeg"
                    avatarSrc="craft.jpeg"
                    title="電子工作班"
                    description="ラズパイやArduinoを使ってメカを作ります"
                    heading={
                      <>
                        男なら
                        <wbr />
                        ゼロから作れ！
                      </>
                    }
                    subHeading={<>電子工作班の活動</>}
                  />
                </React.Fragment>
              ))}
            </HStack>
          </Marquee>
        </VStack>
      </Box>
      <Box bgColor="#121212" h="100vh" w="100vw" p={4} id="dummy"></Box>
    </>
  );
}
