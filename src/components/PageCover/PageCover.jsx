import React from "react";
import "./pageCover.scss";
import book from "../../assets/bookx.png";

export const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page-cover" data-density="hard" ref={ref}>
      <img className="book-cover" src={book} alt="book" />
    </div>
  );
});
