import useWindowSize from "@/hooks/useWindowSize";
import DeskTop from "./top/deskTop";
import MobileTop from "./top/mobileTop";

export type TopProps = {
  wordsEn: string[];
  wordsJa: string[];
  contentRef: React.RefObject<HTMLDivElement>;
};

export default function Top(props: TopProps) {
  const [width] = useWindowSize();
  return width >= 768 ? <DeskTop {...props} /> : <MobileTop {...props} />;
}
