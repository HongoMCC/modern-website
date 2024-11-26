import useWindowSize from "@/hooks/useWindowSize";
import { ReactNode } from "react";
import DeskGreet from "./greet/deskGreet";
import MobileGreet from "./greet/mobileGreet";

export type GreetProps = {
  imageSrc: string;
  title: string;
  children?: ReactNode;
};

export default function Greet(props: GreetProps) {
  const [width] = useWindowSize();
  return width >= 768 ? (
    <DeskGreet {...props}>{props.children}</DeskGreet>
  ) : (
    <MobileGreet {...props}>{props.children}</MobileGreet>
  );
}
