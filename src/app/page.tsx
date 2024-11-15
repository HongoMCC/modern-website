"use client";

import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  IconButton,
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
          <Center ref={contentRef} w="50%" flexGrow={1} h="full">
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
            <HStack ml={5}>
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
                description="吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を吹く。どうも咽せぽくて実に弱った。これが人間の飲む煙草というものである事はようやくこの頃知った。吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。"
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
              <Gallery
                bgImage="retro.jpeg"
                avatarSrc="retro.jpeg"
                title="技術遺産研究班"
                description="PC-98やFM-TOWNSなどのレトロPCを研究します"
                heading={
                  <>
                    古きを温め
                    <wbr />
                    新しきを知る
                  </>
                }
                subHeading={<>レトロPC班の活動</>}
              />
            </HStack>
          </Marquee>
        </VStack>
      </Box>
      <Box bgColor="#121212" h="100vh" w="100vw" p={4} id="dummy"></Box>
    </>
  );
}
