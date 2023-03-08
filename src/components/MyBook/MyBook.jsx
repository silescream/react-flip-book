import HTMLFlipBook from "react-pageflip";
import { Page } from "../Page";
import { PageCover } from "../PageCover/PageCover";

import "./book.scss";

export function MyBook(props) {
  
  return (
    <div className="flipbook">
      <HTMLFlipBook className="book" width={390} height={415} showCover={true} maxShadowOpacity={0}>
        <PageCover number ="0"></PageCover>
        <Page number="1">Page text</Page>
        <Page number="2">Page text</Page>
        <Page number="3">Page text</Page>
        <Page number="4">Page text</Page>
        <Page number="5">Page text</Page>
        <Page number="6">Page text</Page>
      </HTMLFlipBook>
    </div>
  );
}
