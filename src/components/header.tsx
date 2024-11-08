import useWindowSize from "@/hooks/useWindowSize";
import DeskHeader from "./header/deskHeader";
import MobileHeader from "./header/mobileHeader";

export default function Header() {
  const [width] = useWindowSize();
  return width >= 390 ? <DeskHeader /> : <MobileHeader />;
}
