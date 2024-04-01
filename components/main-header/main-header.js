import styles from "@/components/main-header/main-header.module.css";
import Logo from "@/public/images/logo.png";
import NavLink from "./nav-link";

import Link from "next/link";
import Image from "next/image";

function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={Logo} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
