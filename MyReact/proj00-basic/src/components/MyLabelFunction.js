import React from "react";
import './MyLabelFunction.css';

export default function MyLabelFunction({ tt, aa }) {
  const abcd = {
    aa1: "1234",
    bb1: "5678",
    cc1: "tyui",
  };

  const { aa1, bb1, cc1 } = abcd;

  console.log(aa1);
  console.log(bb1);
  console.log(cc1);

  return (
    <div>
      {tt}-{aa}
      <div className="flex-container">
        <div className="flex-item-left">1</div>
        <div className="flex-item-right">2</div>
      </div>
    </div>
  );
}
