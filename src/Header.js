import React from "react";
import Menu from "./Menu";
import { useEffect } from "react";

const Header = ({ menus, setMenuSelected, menuSelected, setIsLoading }) => {
  //inline css
  //   const headerStyle = {
  //     backgroundColor: "royalblue",
  //     color: "#fff",
  //   };

  return (
    // <header style={headerStyle}>
    //   <h1>Groceries List</h1>
    // </header>
    <header className="flex-container">
      {menus.map((menu) => (
        <Menu
          key={menu}
          menu={menu}
          setMenuSelected={setMenuSelected}
          menuSelected={menuSelected}
          setIsLoading={setIsLoading}
        ></Menu>
      ))}
    </header>
  );
};

Header.defaultProps = {
  title: "List",
};

export default Header;
