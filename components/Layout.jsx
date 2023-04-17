import Head from "next/head";
export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>Navbar</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
