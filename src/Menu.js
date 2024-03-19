import React from "react";

const Menu = ({ menu, setMenuSelected, menuSelected, setIsLoading }) => {
  return (
    <div
      className={menu === menuSelected ? "selected" : null}
      onClick={() => {
        setMenuSelected(menu);
        setIsLoading(true);
      }}
    >
      {menu}
    </div>
  );
};

export default Menu;
