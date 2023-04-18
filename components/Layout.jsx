import Head from "next/head";
import style from "../src/styles/Layout.module.css";
import NavbarComponent from "./NavbarComponent";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>Fav-Image {title ? `| ${title}` : ""}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent></NavbarComponent>
      <main className={style.container}>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}