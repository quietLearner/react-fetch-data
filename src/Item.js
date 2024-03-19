import React from "react";
import TR from "./TR";

const Item = ({ item }) => {
  return (
    <table>
      <tbody>
        <TR item={item}></TR>
      </tbody>
    </table>
  );
};

export default Item;
