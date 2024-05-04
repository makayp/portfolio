import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavToggle from "./NavToggle";

function Header() {
  return (
    <header id='header'>
      <Logo />
      <NavLinks />
      <NavToggle />
    </header>
  );
}

export default Header;
