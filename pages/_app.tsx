import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "./app.css";


import { MoralisProvider,  } from "react-moralis";


function MyApp({ Component, pageProps }) {

  return (
    <MoralisProvider initializeOnMount={false}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
