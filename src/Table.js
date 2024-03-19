import React from "react";
import TR from "./TR";

const Table = ({ items }) => {
  const trs = [];

  for (let item of items) {
    //console.log(JSON.stringify(item));
    trs.push(<TR key={item.id} item={item} />);
  }

  return (
    <table>
      <tbody>{trs}</tbody>
    </table>
  );
};

export default Table;
