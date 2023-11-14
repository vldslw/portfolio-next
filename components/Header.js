import "./Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="header__logo">
        vldslw
      </Link>
      <nav className="header__nav">
        <Link href="#stack" className="header__nav-link">
          About
        </Link>
        <Link href="#projects" className="header__nav-link">
          Projects
        </Link>
        <Link href="#footer" className="header__nav-link">
          Contacts
        </Link>
      </nav>
    </header>
  );
};

export { Header };
