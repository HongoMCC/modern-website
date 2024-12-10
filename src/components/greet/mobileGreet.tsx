"use client";

import { GreetProps } from "../greet";
import {
  VStack,
  Heading,
  Image,
  Text,
  Button,
  Modal,
  ScrollArea,
  useDisclosure,
  Box,
} from "@yamada-ui/react";
import Children from "react-children-utilities";
export default function MobileGreet(props: GreetProps) {
  const preview = Children.onlyText(props.children);
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <VStack bgColor="#252525" borderRadius="md" p={4} m={2}>
      <Image
        src={props.imageSrc}
        loading="lazy"
        alt="部長"
        borderRadius="md"
        h="300px"
        aspectRatio={3 / 4}
        objectFit={"cover"}
        objectPosition="left 0"
      />
      <VStack>
        <Heading textColor="white">{props.title}</Heading>
        <Text textColor="gray.50" fontSize="sm" lineClamp={2}>
          {preview}
        </Text>
      </VStack>
      <Button colorScheme="primary" onClick={onOpen}>
        読む
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Box
          bgImage={props.imageSrc}
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
            <Heading textColor="white" size="lg" wordBreak="keep-all">
              {props.title}
            </Heading>
          </VStack>
        </Box>
        <ScrollArea p={4} h="300px">
          {props.children}
        </ScrollArea>
        <Button
          colorScheme="primary"
          onClick={onClose}
          borderRadius="none"
          aria-label="閉じる"
        >
          とじる
        </Button>
      </Modal>
    </VStack>
  );
}
