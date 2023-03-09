import React from "react";
import "./page.scss";
import story from "../../assets/story1.png";
import frame from "../../assets/frame.png";
import rightpagex from "../../assets/rightpagex.png";

export const Page = React.forwardRef(({img, text, number}, ref) => {
  const pageClass = number % 2 === 0 ? "rightpage" : "leftpage" ;
  return (
      <div className={pageClass} id="page" ref={ref}>
        <div className="page">
          <img className="page__story" src={img} alt="story1" />
          <p className= "page__text">{text}</p>
          <p className="page__number">{number}</p>
          <img className="page__frame" src={frame} alt="page-frame" />
        </div>
      </div>
  );
});
