import React from "react";
import "./page.scss";
import story from "../../assets/story1.png";
import frame from "../../assets/frame.png";
import rightpagex from "../../assets/rightpagex.png";

export const Page = React.forwardRef((props, ref) => {
  const pageClass = props.number % 2 === 0 ? "rightpage" : "leftpage" ;
  return (
      <div className={pageClass} id="page" ref={ref}>
        <div className="page">
          <img сlassname="page__story" src={story} alt="story1" />
          <p className="page__number">{props.number}</p>
          <img className="page__frame" src={frame} alt="page-frame" />
        </div>
      </div>
  );
});
