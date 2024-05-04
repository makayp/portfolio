function NavLinks() {
  return (
    <ul className='nav-links'>
      <li className='nav-item'>
        <a href='#hero'>Home</a>
      </li>
      <li className='nav-item'>
        <a className='nav-item' href='#about'>
          About
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-item' href='#projects'>
          Projects
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-item' href='#contact'>
          Contact
        </a>
      </li>

      <li className='nav-item'>
        <img src='/moon-regular.svg' width={30} alt='moon/star' />
      </li>
    </ul>
  );
}

export default NavLinks;
