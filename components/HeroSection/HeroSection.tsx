import React from "react";
import BuySection from "./BuySection";
import CardHeader from "./CardHeader";
import PreSale from "./PreSale";
import VideoSection from "./VideoSection";
import { useEffect } from "react";
import { ethers } from "ethers";
import { PrivateSaleVesting_ABI, PrivateSaleVesting_Address } from "../../config/TestNet/PrivateSaleVesting";


;
// format span to show the time left
const getFormatDateTime = seconds => {
  const formatDateTime = time => {
    time = Number(time);
    const d = Math.floor(time / (3600 * 24));
    const h = Math.floor((time % (3600 * 24)) / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = Math.floor(time % 60);

    const dDisplay = d > 0 ? (d == 1 ? d + "day " : d + " days ") : "";
    const hDisplay = h > 9 ? h+":": "0"+h+":";
    const mDisplay = m > 9 ? m+":": "0"+m+":";
    const sDisplay = s > 9 ? s: "0"+s;
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
      {props.timeRemaining?getFormatDateTime(props.timeRemaining):"00:00:00"}
      
    </span>
  );
};
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
  const [vestingContractAlreadyInvested, setVestingContractAlreadyInvested] = React.useState<number>(72000);


  useEffect(() => {
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
              <CardHeader />
              <div className="card-body">
                <div className="tab-content mt-3">
                  <div className="tab-pane " id="seed" role="tabpanel">
                    <a href="#" className="card-link text-danger">
                      Read more
                    </a>
                  </div>
                  {/* //** ! Starting  */}
                  <div className="tab-pane active" id="private" role="tabpanel" aria-labelledby="history-tab">
                    <div className="row">
                      <div className="col-sm-3 col-md-4">
                        <div className="dropdown">
                          <button
                            className="btn dropdown-toggle flex items-center"
                            style={{ border: " 0", backgroundColor: "white" }}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img src="/polygon.png" alt="Polygon image" style={{ width: "30px" }} />
                          </button>
                          <ul className="dropdown-menu" style={{ width: "10px", fontSize: " 10px" }}>
                            <li className="flex items-center hover:cursor-pointer">
                              <img
                                src="/polygon.png"
                                alt=""
                                style={{ width: " 30px", marginLeft: "10px", marginRight: "10px" }}
                              />
                              <span className="">Matic USDT</span>
                            </li>
                            <li>
                              <div className="dropdown-divider"></div>
                            </li>
                            <li className="flex items-center hover:cursor-pointer">
                              <img
                                src="/bsc.png"
                                alt=""
                                style={{ width: "30px", marginLeft: "10px", marginRight: " 10px" }}
                              />
                              Binance USDT
                            </li>
                            <li>
                              <div className="dropdown-divider"></div>
                            </li>
                            <li className="flex items-center hover:cursor-pointer">
                              <img
                                src="./img/icon/eth.png"
                                alt=""
                                style={{ width: "30px", marginLeft: "10px", marginRight: "10px" }}
                              />
                              Ethereum USDT
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <h2 className="card-text text-center text-dark2 text-4xl font-semibold">Invest</h2>
                        <br />
                      </div>
                      <div className="col-sm-3 col-md-4 text-end pt-4 pr-10">
                        <div className="text-light2 fw-semibold">
                          OPEN <span className="blink_me"></span>
                        </div>
                      </div>
                    </div>

                    {/* From Here again */}
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <span className="private-on text-success">$104,000</span>/
                        <span className="private-total text-success fw-semibold">$300,000</span>
                        <div className="progress">
                          {/* Progress Bar here */}
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Working Section for Private Sale to Wallet...etc */}
                    <BuySection
                      stepsStatus={props.stepsStatus}
                      setStepsStatus={props.setStepsStatus}
                      showModal={props.showModal}
                      setShowModal={props.setShowModal}
                      showBuyTokenModal={props.showBuyTokenModal}
                      setShowBuyTokenModal={props.setShowBuyTokenModal}
                    />

                    <div className="row align-items-center" style={{ backgroundColor: " #fcfcfc ", marginTop: "30px" }}>
                      <div className="col-md-12 pt-4">
                        <h5 className="text-center text-grad1">Sale ending in </h5>
                      </div>
                      <div className="col-md-12 text-center" style={{ marginBottom: " 20px" }}>
                        <span className="fw-semibold text-grad1" style={{ fontSize: " 40px" }} id="clock"></span>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center pb-8">
                      {/* <span className="font-semibold text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500">
                        {" "}
                        12 days
                      </span> */}
                      <CountDown timeRemaining={timeRemaining} />
                    </div>
                  </div>

                  <PreSale />
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
