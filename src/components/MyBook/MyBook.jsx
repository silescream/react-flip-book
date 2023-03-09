import HTMLFlipBook from "react-pageflip";
import { Page } from "../Page";
import { PageCover } from "../PageCover/PageCover";
import openarrow from "../../assets/oppenarrow.svg";
import nextarrow from "../../assets/rightarrow.svg"
import { stories } from "../../Util/data";
import { useState, useEffect, useRef } from "react";

import "./book.scss";

export function MyBook() {
  const bookRef = useRef(null);
  const [bookPage, setBookPage] = useState(0);

  const nextButtonClick = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const prevButtonClick = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  const onPage = (e) => {
    if(e.data === 0) {
      setBookPage(e.data);
    } else if (e.data === 1) {
      setBookPage(e.data);
    }
  };

console.log("render");

  return (
    <div className="container">
      <div className="flipbook">
        <HTMLFlipBook
          className="book"
          width={435}
          height={550}
          showCover={true}
          maxShadowOpacity={0}
          ref={bookRef}
          onFlip={onPage}
        >
          <PageCover number="0"></PageCover>
          {stories.map((story, index) => (
            <Page key={index} number={index + 1} img={story.img} text={story.text} />
          ))}
        </HTMLFlipBook>
      </div>
      {bookPage === 0 ? (
        <button className="open-button" onClick={nextButtonClick}>
           <img src={openarrow} alt="open-book-arrow" />
        </button>
      ) : (
          <div className="button-container">
            <button className="previous-button" type="button" onClick={prevButtonClick}>
              <img src={openarrow} alt="previous-arrow" />
            </button>
            <button className="next-button" type="button" onClick={nextButtonClick}>
            <img src={nextarrow} alt="next-arrow" />
            </button>
          </div>
      )}
    </div>
  );
}
