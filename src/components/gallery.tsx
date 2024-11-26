"use client";
import useWindowSize from "@/hooks/useWindowSize";
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Modal,
  ScrollArea,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@yamada-ui/react";
import { ReactNode } from "react";

interface GalleryProps {
  bgImage: string;
  avatarSrc: string;
  title: string;
  description: string | ReactNode;
  heading: string | ReactNode;
  subHeading: string | ReactNode;
  memberNum?: number;
}

export default function Gallery(props: GalleryProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [width] = useWindowSize();
  return (
    <Box
      w={{ base: "400px", md: "300px" }}
      h={{ base: "500px", md: "375px" }}
      borderRadius="md"
      bgImage={props.bgImage}
      bgPosition="center"
      bgSize="cover"
      overflow={"hidden"}
      onClick={onOpen}
    >
      <VStack alignItems="flex-end" gap={0} h="100%">
        <VStack
          overflow="hidden"
          flexGrow={1}
          bg="linear-gradient(0deg, rgba(2,0,36,0.6) 0%, rgba(0,212,255,0) 50%);"
          justifyContent="flex-end"
          gap={0}
          p={4}
        >
          <Text textColor="white">{props.subHeading}</Text>
          <Heading textColor="white" size="lg" wordBreak="keep-all">
            {props.heading}
          </Heading>
        </VStack>
        <Box
          bgColor="whiteAlpha.800"
          backdropFilter="blur(3px)"
          w="100%"
          overflow="hidden"
        >
          <HStack p={4}>
            <Avatar src={props.avatarSrc} />
            <VStack gap={0.5}>
              <Heading textColor="#121212" size="sm">
                {props.title}
              </Heading>
              <Text textColor="#121212" fontSize="xs" lineClamp={1}>
                {props.description}
              </Text>
            </VStack>
            <Spacer />
            {width > 768 && (
              <Button
                borderLeftRadius="full"
                borderRightRadius="full"
                fontWeight="normal"
                fontSize="xs"
                colorScheme="primary"
                w="150px"
                onClick={onOpen}
              >
                もっと見る
              </Button>
            )}
          </HStack>
        </Box>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Box>
          <HStack p={4}>
            <Avatar src={props.avatarSrc} />
            <VStack gap={0.5}>
              <Heading textColor="#121212" size="sm">
                {props.title}
              </Heading>
              <Text textColor="#121212" fontSize="xs">
                班員 {props.memberNum ? `${props.memberNum}` : "?"} 名
              </Text>
            </VStack>
            <Spacer />
          </HStack>
        </Box>
        <Box
          bgImage={props.bgImage}
          bgPosition="center"
          bgSize="cover"
          h="200px"
        >
          <VStack
            overflow="hidden"
            flexGrow={1}
            bg="linear-gradient(0deg, rgba(2,0,36,0.6) 0%, rgba(0,212,255,0) 100%);"
            justifyContent="flex-end"
            gap={0}
            p={4}
            h="100%"
          >
            <Text textColor="white">{props.subHeading}</Text>
            <Heading textColor="white" size="lg" wordBreak="keep-all">
              {props.heading}
            </Heading>
          </VStack>
        </Box>
        <ScrollArea p={4} h="300px">
          {props.description}
        </ScrollArea>

        <Button colorScheme="primary" onClick={onClose} borderRadius="none">
          とじる
        </Button>
      </Modal>
    </Box>
  );
}
