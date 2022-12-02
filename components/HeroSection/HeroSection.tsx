import React from "react";
import BuySection from "./BuySection";
import CardHeader from "./CardHeader";
import PreSale from "./PreSale";
import PublicSale from "./PublicSale";
import VideoSection from "./VideoSection";
import { useEffect } from "react";
import { BigNumber, ethers } from "ethers";
import { PrivateSaleVesting_ABI, PrivateSaleVesting_Address } from "../../config/TestNet/PrivateSaleVesting";
import { YPredictPrivateSale_ABI, YPredictPrivateSale_address } from "../../config/TestNet/YPredictPrivateSale";
import PrivateSale from "./PrivateSale";

// format span to show the time left
const getFormatDateTime = seconds => {
  const formatDateTime = time => {
    time = Number(time);
    if (time < 1) return "Finished!";
    const d = Math.floor(time / (3600 * 24));
    const h = Math.floor((time % (3600 * 24)) / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = Math.floor(time % 60);

    const dDisplay = d > 0 ? (d == 1 ? d + "day " : d + " days ") : "";
    const hDisplay = h > 9 ? h + ":" : "0" + h + ":";
    const mDisplay = m > 9 ? m + ":" : "0" + m + ":";
    const sDisplay = s > 9 ? s : "0" + s;
    return dDisplay + hDisplay + mDisplay + sDisplay;
  };
  return formatDateTime(seconds);
};
const CountDown = (props: { timeRemaining }) => {
  const timeSpanRef = React.useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let counter = Number(props.timeRemaining);
    const timer = setInterval(() => {
      if (timeSpanRef.current) {
        counter--;
        timeSpanRef.current.innerHTML = getFormatDateTime(counter);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [props.timeRemaining]);
  return (
    <span
      ref={timeSpanRef}
      className="font-semibold text-3xl sm:text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500"
    >
      {props.timeRemaining ? getFormatDateTime(props.timeRemaining) : "00:00:00"}
    </span>
  );
};

// seperate Number with camma if it's greater than thousand

/* eslint-disable @next/next/no-img-element */
export default function HeroSection(props: {
  showModal;
  setShowModal;
  showBuyTokenModal;
  setShowBuyTokenModal;
  stepsStatus;
  setStepsStatus;
}) {
  const [timeRemaining, setTimeRemaining] = React.useState<number>(null);
  const [vestingContractAlreadyInvested, setVestingContractAlreadyInvested] = React.useState<number>(72000); // set the initial value here
  const [vestingContract_All_SoldedToken, setVestingContract_All_SoldedToken_USDT] = React.useState<number>(null); // this will be in Float USD not USDT
  const [pricePerToken, setPricePerToken] = React.useState<number>(null);
  const [vestingContractTarget, setVestingContractTarget] = React.useState(300000); // set the target value here
  const [selectedSection, setSelectedSection] = React.useState("private");

  useEffect(() => {
    // this will set the time remaining for the private sale
    const getBlockTime = async () => {
      const provider = new ethers.providers.JsonRpcProvider("https://polygon-testnet-rpc.allthatnode.com:8545");
      const currentBlock = await provider.getBlockNumber();
      const blockTimestamp = (await provider.getBlock(currentBlock)).timestamp; // this is in seconds
      console.log("Block time stamp : ", blockTimestamp);
      // now let's get the endDate from the contract
      const contract = new ethers.Contract(PrivateSaleVesting_Address, PrivateSaleVesting_ABI, provider);
      const endDate_sec = (await contract.endDate()).toString(); // call endDate() function of the contract
      console.log("End date in seconds : ", endDate_sec);
      const timeRemaining = endDate_sec - blockTimestamp;
      setTimeRemaining(timeRemaining);
    };
    getBlockTime();
    const getAllSoldedToken = async () => {
      const provider = new ethers.providers.JsonRpcProvider("https://polygon-testnet-rpc.allthatnode.com:8545");
      const contract = new ethers.Contract(YPredictPrivateSale_address, YPredictPrivateSale_ABI, provider);
      const tokenSold_BigNumber = await contract.s_tokenSold();
      const tokenSold = BigNumber.from(tokenSold_BigNumber).div(BigNumber.from("1000000000000000000")).toNumber();
      const pricePerToken_BigNumber = await contract.s_usdtPrice();
      const pricePerToken = (
        parseFloat("1") /
        (parseFloat("1000000") / parseFloat(pricePerToken_BigNumber.toString()))
      ).toFixed(3);
      const allSoldedToken_USD_without_decimals = (
        parseFloat(tokenSold.toString()) * parseFloat(pricePerToken.toString())
      ).toFixed(0);
      setVestingContract_All_SoldedToken_USDT(tokenSold);
      setVestingContract_All_SoldedToken_USDT(Number(allSoldedToken_USD_without_decimals));
      console.log("Price per token Big Number ", pricePerToken_BigNumber.toString());
      console.log("Price per token : ", pricePerToken);
      console.log("All solded token : ", allSoldedToken_USD_without_decimals);
      console.log("Token sold : ", tokenSold);
    };
    getAllSoldedToken();
  }, []);

  return (
    <div className="hero-section">
      {/* Title */}
      <div className="hero-title">
        <span className="empower">YPRED</span>, a token that <span className="empower">empowers</span> world&apos;s most
        powerful crypto research tool.
      </div>
      <br></br>
      <div className="container lg:px-32">
        <div className="row" style={{ marginTop: "0px" }}>
          <VideoSection />
          <div className="col-md-6">
            <div className="card custom-card-buy">
              <CardHeader selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
              <div className="card-body">
                <div className="tab-content mt-3">
                  <div className="tab-pane " id="seed" role="tabpanel">
                    <a href="#" className="card-link text-danger">
                      Read more
                    </a>
                  </div>
                  {/* //** ! PrivateSale  */}
                  {selectedSection === "private" && (
                    <PrivateSale
                      stepsStatus={props.stepsStatus}
                      setStepsStatus={props.setStepsStatus}
                      showModal={props.showModal}
                      setShowModal={props.setShowModal}
                      showBuyTokenModal={props.showBuyTokenModal}
                      setShowBuyTokenModal={props.setShowBuyTokenModal}
                    />
                  )}
                  {selectedSection === "presale" && <PreSale />}
                  {selectedSection === "public" && <PublicSale />}
                  {/* END PRESALE  */}

                  <div className="tab-pane" id="public" role="tabpanel" aria-labelledby="deals-tab">
                    <p className="card-text">
                      Immerse yourself in the colours, aromas and traditions of Emilia-Romagna with a holiday in
                      Bologna, and discover the city&apos;s rich artistic heritage.
                    </p>
                    <a href="#" className="btn btn-danger btn-sm">
                      Get Deals
                    </a>
                  </div>
                  {/* Continue Here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
