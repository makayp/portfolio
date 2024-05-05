import { useState } from "react";

function NavLinks() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeIcon = isDarkMode ? "sun" : "moon";

  function handleClick() {
    setIsDarkMode(curr => !curr);
    document.body.classList.toggle("dark-theme");
  }

  return (
    <ul className='nav-links'>
      <li className='nav-item'>
        <a href='#hero'>Home</a>
      </li>
      <li className='nav-item'>
        <a href='#about'>About</a>
      </li>
      <li className='nav-item'>
        <a href='#projects'>Projects</a>
      </li>
      <li className='nav-item'>
        <a href='#contact'>Contact</a>
      </li>

      <li className='nav-item'>
        <img
          className='theme-btn'
          src={`/${themeIcon}.svg`}
          width={30}
          alt={"moon/star"}
          onClick={handleClick}
        />
      </li>
    </ul>
  );
}

export default NavLinks;
