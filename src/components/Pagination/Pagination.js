import React from "react";
import Button from "../Button/Button";
import "./styles.css";
export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="pagination-contanier">
      {gotoPrevPage && <Button text={"previous"} onClick={gotoPrevPage} />}
      {gotoNextPage && <Button text={"next"} onClick={gotoNextPage} />}
    </div>
  );
}
