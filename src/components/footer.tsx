"use client";

import useWindowSize from "@/hooks/useWindowSize";
import DeskFooter from "./footer/deskFooter";
import MobileFooter from "./footer/mobileFooter";

export default function Footer() {
  const [width] = useWindowSize();
  return width >= 768 ? <DeskFooter /> : <MobileFooter />;
}
