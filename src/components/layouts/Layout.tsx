import Head from "next/head";
import { Navbar } from "../ui";

interface Args {
  title: string;
  children: string | JSX.Element | JSX.Element[];
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout = ({ title, children }: Args) => {

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Luis Matamoros" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokodex`} />
        <meta
          property="og:title"
          content={`Informacion sobre el ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la informacion sobre el ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <Navbar />

      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};
