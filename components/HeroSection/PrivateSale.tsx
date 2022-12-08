import React from "react";
import BuySection from "./BuySection";

import { useEffect } from "react";
import { BigNumber, ethers } from "ethers";
import { PrivateSaleVesting_ABI, PrivateSaleVesting_Address } from "../../config/TestNet/PrivateSaleVesting";
import { YPredictPrivateSale_ABI, YPredictPrivateSale_address } from "../../config/TestNet/YPredictPrivateSale";
import Tooltip from "@mui/material/Tooltip";
/* eslint-disable @next/next/no-img-element */
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

/* eslint-disable @next/next/no-img-element */
export default function PrivateSale(props: {
  showModal;
  setShowModal;
  showBuyTokenModal;
  setShowBuyTokenModal;
  stepsStatus;
  setStepsStatus;
}) {
  const [timeRemaining, setTimeRemaining] = React.useState<number>(null);
  const [vestingContractAlreadyInvested, setVestingContractAlreadyInvested] = React.useState<number>(10000); // set the initial value here
  const [vestingContract_All_SoldedToken, setVestingContract_All_SoldedToken_USDT] = React.useState<number>(null); // this will be in Float USD not USDT
  const [pricePerToken, setPricePerToken] = React.useState<number>(null);
  const [vestingContractTarget, setVestingContractTarget] = React.useState(72000); // set the target value here

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
                <img src="/polygon.png" alt="" style={{ width: " 30px", marginLeft: "10px", marginRight: "10px" }} />
                <span className="">Matic USDT</span>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <Tooltip title="Coming soon">
                <li className="flex items-center hover:cursor-help">
                  <img src="/bsc.png" alt="" style={{ width: "30px", marginLeft: "10px", marginRight: " 10px" }} />
                  Binance USDT
                </li>
              </Tooltip>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <Tooltip title="Coming soon">
                <li className="flex items-center hover:cursor-help">
                  <img
                    src="./img/icon/eth.png"
                    alt=""
                    style={{ width: "30px", marginLeft: "10px", marginRight: " 10px" }}
                  />
                  Ethereum USDT
                </li>
              </Tooltip>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <h2 className="card-text text-center text-dark2 text-2xl sm:text-4xl font-semibold">Invest</h2>
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
          <div className="flex justify-center py-2">
            <div className="private-on text-success flex items-center">
              $
              {vestingContract_All_SoldedToken ? (
                (vestingContract_All_SoldedToken + vestingContractAlreadyInvested).toLocaleString("en-US")
              ) : (
                <div className="flex space-x-1 animate-pulse ml-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
              )}
            </div>

            <span className="private-total text-success fw-semibold">
              /${vestingContractTarget.toLocaleString("en-US")}
            </span>
          </div>

          <div className="progress">
            {/* Progress Bar here */}
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              style={{
                width:
                  (
                    ((vestingContract_All_SoldedToken + vestingContractAlreadyInvested) * 100) /
                    vestingContractTarget
                  ).toString() + "%",
              }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
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

      <div className="w-full flex justify-center items-center mt-4 py-4" style={{ backgroundColor: "#f7f7f7" }}>
        {/* <span className="font-semibold text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500">
                        {" "}
                        12 days
                    </span> */}
        {timeRemaining ? (
          <div className="w-full flex flex-col space-y-3 justify-center items-center">
            <h5 className="text-center text-grad1">Sale starting in</h5>
            <CountDown timeRemaining={timeRemaining} />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
