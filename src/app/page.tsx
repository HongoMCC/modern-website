"use client";

import {
  Box,
  Center,
  Fade,
  Heading,
  HStack,
  Icon,
  ScaleFade,
  Text,
  useDisclosure,
  VStack,
} from "@yamada-ui/react";

import Header from "@/components/header";
import { MdTouchApp } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import Gallery from "@/components/gallery";
import Marquee from "react-fast-marquee";
import Footer from "@/components/footer";
import ArticleTitle from "@/components/articleTitle";
import Top from "@/components/top";
import Greet from "@/components/greet";
import Loading from "./loading";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(
    null!
  ) as React.RefObject<HTMLDivElement>;
  const wordsEn = ["Hongo.", "yourself.", "everything!"];
  const wordsJa = ["本郷", "自分自身", "すべて"];
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const { open, onOpen, onClose } = useDisclosure();
  const scaleFadeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onOpen();
      } else {
        onClose();
      }
    });
    observer.observe(scaleFadeRef.current as Element);
    return () => {
      observer.disconnect();
    };
  }, [scaleFadeRef, onOpen, onClose]);

  return (
    <Box bgColor="#121212" overflowX="hidden" top={0}>
      {!isLoaded && <Loading />}
      <Fade open={isLoaded} duration={3}>
        <Header />
        <Top wordsEn={wordsEn} wordsJa={wordsJa} contentRef={contentRef} />
        <Box bgColor="#121212" w="100vw" p={4}>
          <VStack>
            <ArticleTitle no={1} en="About" ja="マイコン部について" />
            <Text textColor="gray.50" fontSize={{ base: "md", md: "sm" }}>
              本郷学園マイコン部は、東京都巣鴨に位置する中高一貫制の男子校、本郷中学校・高等学校の文化部です。
              <br />
              さまざまな興味関心を持つ部員たちが集い、日夜跳梁跋扈しています。
            </Text>
          </VStack>
        </Box>
        <Box bgColor="#121212" w="100vw" p={4}>
          <VStack w="100%">
            <ArticleTitle no={2} en="Activities" ja="マイコン部の活動" />
            <Text textColor="gray.50" fontSize={{ base: "md", md: "sm" }}>
              マイコン部の活動内容は、
            </Text>
            <ScaleFade open={open} ref={scaleFadeRef} scale={1.8}>
              <Center w="100%">
                <Center
                  bgImage="focus.svg"
                  bgSize="100%"
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  h="200px"
                  w="70%"
                >
                  <Heading
                    textColor="gray.50"
                    size={{ base: "lg", md: "md" }}
                    wordBreak="keep-all"
                    textAlign="center"
                  >
                    「およそ技術に関連 <wbr />
                    していれば <wbr />
                    何をしてもよい」
                  </Heading>
                </Center>
              </Center>
            </ScaleFade>
            <Text
              textColor="white"
              textAlign="right"
              fontSize={{ base: "md", md: "sm" }}
            >
              です。
            </Text>
            <Text
              textColor="gray.50"
              wordBreak="keep-all"
              fontSize={{ base: "md", md: "sm" }}
            >
              部員たちは、自分たちの興味関心に基づいて「班」を結成し、同じ興味を持つ部員たちと共に活動しています。
              <wbr />
              「班」は部員の宣言によって1名以上の班員で設立でき、2つ以上の班に所属することも可能です。
            </Text>
            <Marquee pauseOnHover autoFill>
              <HStack ml={5}>
                <Gallery
                  bgImage="bot.webp"
                  avatarSrc="bot.webp"
                  title="ロボット班"
                  description="近藤科学製二足歩行ロボットキット「KHR」シリーズ（部内通称：KONDO君）を組み立て、制御して、彼が多彩な動きをできるよう手助けします。"
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
                  bgImage="pc.webp"
                  avatarSrc="pc.webp"
                  title="パソコン班"
                  description="最も班員の多い班です。(最も活動内容がぼやけている班ともいえます)コンピュータ上で行う(ソフトウェアを扱う)活動全般を行います。例えば、プログラミング、Web開発、ゲーム制作、3Dモデリング、動画編集、音楽制作などです。"
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
                  bgImage="craft.webp"
                  avatarSrc="vfd.jpg"
                  title="電子工作班"
                  description="基板に電子部品をはんだ付けしながら、電子ゲームやスピーカ、時計、ロボットアームなどのオリジナル作品を制作します。Rasberry PiやArduinoなどのマイコンにプログラムを書き込んで部品制御に使用することもあります。"
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
                  memberNum={2}
                  bgImage="retro.webp"
                  avatarSrc="retro.webp"
                  title="技術遺産研究班"
                  description="情報関連技術の過去を探ることで、新しい技術のありがたみと存在理由を理解する班です。部員が持ち込んだPC-9800シリーズやFM-TOWNSなどを修理して動態保存することを中心に、当時のソフトウェア・マニュアルなどの収集やレトロOSのエミュレートなども行っています。"
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
            <HStack w="100%" justifyContent="center">
              <Icon as={MdTouchApp} color="gray" />
              <Text
                textColor="gray"
                fontSize={{ base: "md", md: "sm" }}
                textAlign="center"
              >
                タッチ・クリックして詳細をみる
              </Text>
            </HStack>
          </VStack>
        </Box>

        <Box bgColor="#121212" w="100vw" p={4}>
          <VStack w="100%">
            <ArticleTitle no={3} en="Executives" ja="部長あいさつ" />
            <Greet imageSrc="bucho.webp" title="マイコン部長">
              <Text
                textColor={{ base: "gray.50", md: "black" }}
                fontSize={{ base: "md", md: "sm" }}
              >
                マイコン部と一口に言っても、既にご覧いただいている通り、その活動は多岐にわたります。
                <br />
                その活動の最小単位は「1人」。つまり、個人がそれぞれ興味の向く方を向いて好きなように活動します。
                <br />
                ただし、誰に言われずとも何かを「創る」ことだけは暗黙の了解となっています。
                <br />
                この部活が「PC部」ではなく「マイコン部」である理由も、ただプログラミングだけではないということがおわかり頂けるでしょう。
                <br />
                特に、PC-98などの古いコンピュータを収集し、技術を継承することが目的のレトロPC班や、レゴを使ってプログラムできるロボットを作成し、また代々継承されているロボットをプログラムして動かすレゴ・ロボット班などです。
                <br />
                これらは、他所のPC系の部活では人数や関連性などの問題で実施されていないものがほとんどです。
                <br />
                ただし、それらは全てが自己責任となっています。その分、よっぽどのことがない限り顧問又は他の部員に活動が阻害されることはありません。
                <br />
                更に、プログラミングに関しても同じように部員たちは「完全独学」で習得しています。
                <br />
                私はC#のみを修めていますが、C,C++,Python,Scratch,Ruby,JavaScript,Java,Rust,Swiftなどが扱える部員もいます。
                <br />
                また、本郷学園の理念の一つに「自学自習」があります。
                <br />
                しかし、マイコン部はそのような胡散臭い文句を常に意識して活動しているわけではありません。
                <br />
                部員たちの活動は全てが純粋な興味だけが動機です。
                <br />
                「プログラミングをやれば受験・就職で使えるだろう」「PCについて知っていたらカッコよくてモテるだろうな」等の損得勘定が動機となってはいけません。そのような不純な思いでは自分が満足のいくものは創作できません。
              </Text>
            </Greet>
          </VStack>
        </Box>
        <Footer />
      </Fade>
    </Box>
  );
}
