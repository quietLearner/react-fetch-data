import React from "react";
import TD from "./TD";

const TR = ({ item }) => {
  const tds = [];

  for (const [key, value] of Object.entries(item)) {
    tds.push(<TD key={key} value={JSON.stringify(value)} />);
  }

  return <tr>{tds}</tr>;
};

export default TR;
