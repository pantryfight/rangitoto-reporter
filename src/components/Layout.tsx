import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <h1 className="banner">~ The Rangitoto Reporter ~</h1>
      <div className="root">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=UnifrakturCook:wght@700&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
        </Head>

        <nav>
          <Navigation />
        </nav>
        <main>{children}</main>
        <style jsx>
          {`
            .root {
              display: block;
              padding: 2rem 0 4rem 0;
              box-sizing: border-box;
              height: 100%;
            }
            main {
              display: flex;
              min-height: 100%;
            }
            @media (min-width: 769px) {
              .root {
                display: flex;
                flex: 1 0 auto;
              }
              main {
                flex: 1 0 auto;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
