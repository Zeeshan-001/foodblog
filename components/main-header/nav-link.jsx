"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

function NavLink({ href, children }) {
  const path = usePathname();

  //   Add classes
  const classAdd = `${classes.link} ${
    path.startsWith(href) ? classes.active : ""
  }`;

  return (
    <Link href={href} className={classAdd}>
      {children}
    </Link>
  );
}

export default NavLink;
