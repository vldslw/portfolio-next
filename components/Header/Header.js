import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        vldslw
      </Link>
      <nav className={styles.navigation}>
        <Link href="#stack" className={styles.link}>
          About
        </Link>
        <Link href="#projects" className={styles.link}>
          Projects
        </Link>
        <Link href="#footer" className={styles.link}>
          Contacts
        </Link>
      </nav>
    </header>
  );
};

export { Header };
