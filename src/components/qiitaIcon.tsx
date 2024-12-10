"use client";

import { Icon, IconProps } from "@yamada-ui/react";

export default function QiitaIcon(props: IconProps) {
  return (
    <Icon {...props} alt="Qiita">
      <image href="qiita-white-icon.webp" width="100%" height="100%" />
    </Icon>
  );
}
