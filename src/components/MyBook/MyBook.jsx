import HTMLFlipBook from "react-pageflip";
import { Page } from "../Page";
import { PageCover } from "../PageCover/PageCover";
import openarrow from "../../assets/oppenarrow.svg";
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
    setBookPage(e.data);
  };



  return (
    <>
      <div className="flipbook">
        <HTMLFlipBook
          className="book"
          width={390}
          height={415}
          showCover={true}
          maxShadowOpacity={0}
          ref={bookRef}
          onFlip={onPage}
        >
          <PageCover number="0"></PageCover>
          {stories.map((story, index) => (
            <Page key={index} number={index + 1} story={story} />
          ))}
        </HTMLFlipBook>
      </div>
      {bookPage === 0 ? (
        <button className="open-button" onClick={nextButtonClick}>
           <img src={openarrow} alt="open-book-arrow" />
        </button>
      ) : (
        <div className="container">
          <div className="button-container">
            <button type="button" onClick={prevButtonClick}>
              Previous page
            </button>
            <button type="button" onClick={nextButtonClick}>
              Next page
            </button>
          </div>
        </div>
      )}
     {/*  <div className="container">
        <div>
          <button type="button" onClick={prevButtonClick}>
            Previous page
          </button>
          <button type="button" onClick={nextButtonClick}>
            Next page
          </button>
        </div>
      </div> */}
    </>
  );
}
