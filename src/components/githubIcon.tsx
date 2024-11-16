"use client";

import { Icon, IconProps } from "@yamada-ui/react";
import React from "react";

import { SiGithub } from "react-icons/si";

export default function GithubIcon(props: IconProps) {
  return <Icon as={SiGithub} {...props} />;
}
