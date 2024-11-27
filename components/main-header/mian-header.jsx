import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.webp";
import HeaderMainBackground from "./headerMain-background";

function MainHeader() {
  return (
    <>
      <HeaderMainBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="Ein Teller mit Essen" />
          Genuss neu gedacht
        </Link>

        {/* Main Navbar */}
        <nav className={classes.nav}>
          <ul>
            {/* Route One */}
            <li>
              <Link href="/meals">Gerichte entdecken</Link>
            </li>

            {/* Route Second */}
            <li>
              <Link href="/community">Treffpunkt für Essensliebhaber</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
