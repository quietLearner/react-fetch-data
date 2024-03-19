import React from "react";
import Table from "./Table";

const Content = ({ items }) => {
  return (
    <>
      {items.length ? (
        <Table items={items}></Table>
      ) : (
        <p style={{ marginTop: "2rem" }}>No Items</p>
      )}
    </>
  );
};

export default Content;
