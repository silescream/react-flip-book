import HTMLFlipBook from "react-pageflip";
import { useState, useRef } from "react";
import { Page } from "../Page";
import { PageCover } from "../PageCover"

import { stories } from "../../Util/data";
import volume from "../../assets/volume.png";
import openarrow from "../../assets/oppenarrow.svg";
import nextarrow from "../../assets/rightarrow.svg";

import "./myBook.scss";

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
    if (e.data === 0) {
      setBookPage(e.data);
    } else if (e.data === 1) {
      setBookPage(e.data);
    }
  };

  return (
    <div className="container">
      <div className="flipbook">
        <HTMLFlipBook
          className="book"
          width={435}
          height={550}
          minWidth={270}
          maxWidth={435}
          minHeight={350}
          maxHeight={560}
          size={"stretch"}
          showCover={true}
          maxShadowOpacity={0}
          ref={bookRef}
          onFlip={onPage}
        >
          <PageCover number="0"></PageCover>
          {stories.map((story, index) => (
            <Page
              key={index}
              number={index + 1}
              img={story.img}
              text={story.text}
            />
          ))}
        </HTMLFlipBook>
      </div>
      {bookPage === 0 ? (
        <button className="open-button" onClick={nextButtonClick}>
          <img src={openarrow} alt="open-book-arrow" />
        </button>
      ) : (
        <div className="button-container">
          <button
            className="previous-button"
            type="button"
            onClick={prevButtonClick}
          >
            <img src={openarrow} alt="previous-arrow" />
          </button>
          <button
            className="next-button"
            type="button"
            onClick={nextButtonClick}
          >
            <img src={nextarrow} alt="next-arrow" />
          </button>
        </div>
      )}
      <img className="volume" src={volume} alt="volume" />
    </div>
  );
}
