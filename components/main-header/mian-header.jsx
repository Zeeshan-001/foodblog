import Image from "next/image";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.webp";
import HeaderMainBackground from "./headerMain-background";
import NavLink from "./nav-link";
import Link from "next/link";
import SocialLinks from "./social-links";

function MainHeader() {
  return (
    <>
      <SocialLinks />
      <HeaderMainBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="Ein Teller mit Essen" />
          Genuss neu gedacht
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Gerichte durchsuchen</NavLink>
            </li>

            <li>
              <NavLink href="/community">Essen-Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
