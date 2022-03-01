import Head from "next/head";
const Header = () => {
  return (
    <>
      <Head>
        <title>Ash Muhamad | Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio. Coded with love, Ash."
        />
        <meta property="og:title" content="Ash Muhamad | Portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Header;
