"use client";

import useWindowSize from "@/hooks/useWindowSize";
import DeskArticleTitle from "./articleTitle/deskArticleTitle";
import MobileArticleTitle from "./articleTitle/mobileArticleTitle";

export type ArticleTitleProps = {
  no: number;
  ja: string;
  en: string;
};

export default function ArticleTitle(props: ArticleTitleProps) {
  const [width] = useWindowSize();
  return width >= 768 ? (
    <DeskArticleTitle {...props} />
  ) : (
    <MobileArticleTitle {...props} />
  );
}
