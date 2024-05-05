import { useState } from "react";

function NavToggle() {
  const [isActive, setIsactive] = useState(false);

  function handleClick() {
    setIsactive(curr => !curr);
  }
  return (
    <div
      id='mobile-menu'
      className={`nav-toggle ${isActive ? "is-active" : ""}`}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default NavToggle;
