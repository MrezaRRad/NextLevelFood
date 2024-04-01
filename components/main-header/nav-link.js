"use client";

import styles from "@/components/main-header/nav-link.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children, name }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
