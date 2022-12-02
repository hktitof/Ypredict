/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";
import HeadLink from "../components/Header/HeadLink";
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="..." />
        <HeadLink />
        <script
          src="https://code.jquery.com/jquery-3.6.1.js"
          integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
          crossOrigin="anonymous"
        />

        <script
          src="https://code.jquery.com/jquery-2.1.4.min.js"
          integrity="sha256-8WqyJLuWKRBVhxXIL1jBDD7SDxU936oZkCnxQbWwJVw="
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossOrigin="anonymous"
        />

        <script src="js/jquery.countdown.min.js" />
        
        
      </Head>
      <body>
        <Main />
        <NextScript />
    
      </body>
    </Html>
  );
}
