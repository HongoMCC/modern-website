"use client";

import useWindowSize from "@/hooks/useWindowSize";
import DeskHeader from "./header/deskHeader";
import MobileHeader from "./header/mobileHeader";

export default function Header() {
  const [width] = useWindowSize();
  return width >= 768 ? <DeskHeader /> : <MobileHeader />;
}
