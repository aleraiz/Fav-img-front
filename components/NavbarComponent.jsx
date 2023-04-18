import Link from "next/link";
import style from "../src/styles/NavbarComponent.module.css";
export default function NavbarComponent() {
  return (
    <nav className={style.navbar}>
      <div>
        <h1>Fav-Images</h1>
      </div>
      <div>
        <Link className={style.link} href="/">
          Home
        </Link>
        <Link className={style.link} href="/favImages">
          Images
        </Link>
        <Link className={style.link} href="/user">
          User
        </Link>
      </div>
    </nav>
  );
}
