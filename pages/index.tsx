import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

// imports components
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import HeadLink from "../components/Header/HeadLink";
import TeamPaddnel from "../components/TeamPanel/TeamPanel";
import PlatformFeature from "../components/platformFeature/PlatformFeature";
import PlatformPayment from "../components/platformPayment/PlatformPayment";
import RevenueSharing from "../components/RevenueSharing/RevenueSharing";
import TokenSale from "../components/TokenSale/TokenSale";
import WhitePaper from "../components/whitepaper/WhitePaper";
import TokenAllocation from "../components/TokenAllocation/TokenAllocation";
import VestingSchedule from "../components/VestingSchedule/VestingSchedule";
import RoadMap from "../components/RoadMap/RoadMap";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import InterestedVestingNotification from "../components/InterestedVestingNotification/InterestedVestingNotification";
import  { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>YPRED Token - yPredict.ai </title>
        {/* <HeadLink/> */}
      </Head>
      <div id="main-wrapper">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={24}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#fff",
            color: "#000",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
        <Header />
        <HeroSection />
        <TeamPaddnel />
        <PlatformFeature />
        <PlatformPayment />
        <RevenueSharing />
        <TokenSale />
        <WhitePaper />
        <TokenAllocation />
        <VestingSchedule />
        <RoadMap />
        <FrequentlyAskedQuestions />
        <InterestedVestingNotification />

        <Footer />
      </div>
    </>
  );
}
