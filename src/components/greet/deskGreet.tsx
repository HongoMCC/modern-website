import { GreetProps } from "../greet";
import { HStack, VStack, Heading, Image } from "@yamada-ui/react";
export default function DeskGreet(props: GreetProps) {
  return (
    <HStack bgColor="#252525" borderRadius="md" p={4} m={2}>
      <Image
        src={props.imageSrc}
        loading="lazy"
        alt="部長"
        borderRadius="md"
        h="500px"
        aspectRatio={3 / 4}
        objectFit={"cover"}
        objectPosition="left 0"
      />
      <VStack>
        <Heading textColor="white">{props.title}</Heading>
        {props.children}
      </VStack>
    </HStack>
  );
}
