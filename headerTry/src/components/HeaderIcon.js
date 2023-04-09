import React from "react";

function HeaderIcon() {
  const handleClick = () => {
    window.location.pathname = "/home";
  };

  return (
    <div onClick={handleClick} className="HeaderIcon">
      <img src="" alt="学生団体IDEAアイコン" />
    </div>
  );
}

export default HeaderIcon;
