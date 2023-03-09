import HTMLFlipBook from "react-pageflip";
import { Page } from "../Page";
import { PageCover } from "../PageCover/PageCover";
import { stories } from "../../Util/data";
import { useState, useEffect, useRef } from "react";

import "./book.scss";

export function MyBook() {
  const bookRef = useRef(null)
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const nextButtonClick = () => {
    bookRef.current.pageFlip().flipNext()
  }

 const prevButtonClick = () => {
    bookRef.current.pageFlip().flipPrev()
  }

  return (
    <>
      <div className="flipbook">
        <HTMLFlipBook
          className="book"
          width={390}
          height={415}
          showCover={true}
          maxShadowOpacity={0.2}
          ref={bookRef}
        >
          <PageCover number="0"></PageCover>
          {stories.map((story, index) => (
            <Page key={index} number={index + 1} story={story} />
          ))}
        </HTMLFlipBook>
      </div>
{/*       <div className="container">
        <div>
          <button type="button" onClick={prevButtonClick} >
            Previous page
          </button>
          <button type="button"  onClick={nextButtonClick}>
            Next page
          </button>
        </div>
      </div> */}
    </>
  );
}
