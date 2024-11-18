"use client";

import { IconButton, Indicator, useDisclosure } from "@yamada-ui/react";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";
import { ReactElement } from "react";

type SocialButtonProps = {
  icon: ReactElement;
  href: string;
};

export default function SocialButton(props: SocialButtonProps) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <Indicator label={<MdOpenInNew />} p={1} isDisabled={!isOpen} ping>
      <IconButton
        variant="ghost"
        icon={props.icon}
        as={Link}
        rel="noopener noreferrer"
        target="_blank"
        href={props.href}
        size="md"
        color="white"
        _hover={{ bgColor: "gray.700" }}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      />
    </Indicator>
  );
}
