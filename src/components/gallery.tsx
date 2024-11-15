"use client";
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@yamada-ui/react";
import { ReactNode } from "react";

interface GalleryProps {
  bgImage: string;
  avatarSrc: string;
  title: string;
  description: string;
  heading: ReactNode;
  subHeading: ReactNode;
}

export default function Gallery(props: GalleryProps) {
  return (
    <Box
      w="400px"
      h="500px"
      borderRadius="md"
      bgImage={props.bgImage}
      bgPosition="center"
      bgSize="cover"
      overflow={"hidden"}
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
            <Button
              borderLeftRadius="full"
              borderRightRadius="full"
              fontWeight="normal"
              fontSize="xs"
              colorScheme="primary"
              w="150px"
            >
              もっと見る
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}
