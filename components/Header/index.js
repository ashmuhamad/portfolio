import Head from "next/head";
const Header = () => {
  return (
    <>
      <Head>
        <title>Ash Muhamad | Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio. Coded with love, Ash."
          key="description"
        />
        <meta
          property="og:title"
          content="Ash Muhamad | Portfolio"
          key="title"
        />{" "}
        <meta
          property="og:description"
          content="Welcome to my portfolio. Coded with love, Ash."
          key="description"
        />
        <meta
          property="og:url"
          content="https://ashportfolio.vercel.app/"
          key="url"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Header;
