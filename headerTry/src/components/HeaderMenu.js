import React from "react";
import HeaderMenuData from "./HeaderMenuData";

function HeaderMenu() {
  return (
    <ul className="HeaderMenuList">
      {HeaderMenuData.map((value, key) => {
        return (
          <li
            key={key}
            className="row"
            onClick={() => {
              window.location.pathname = value.link;
            }}
          >
            <div id="icon">{value.title}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderMenu;
