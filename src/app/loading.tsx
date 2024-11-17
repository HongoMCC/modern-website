import { Image, VStack, Loading as YamadaLoading } from "@yamada-ui/react";

export default function Loading() {
  return (
    <VStack
      h="100vh"
      w="100vw"
      bgColor="#121212"
      justifyContent="center"
      alignItems="center"
    >
      <Image src="monitorIcon-bw.png" alt="logo" h="100px" m={4} />
      <YamadaLoading fontSize="4xl" variant="grid" color="gray" />
    </VStack>
  );
}
