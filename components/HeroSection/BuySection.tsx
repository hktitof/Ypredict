import React from "react";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import Lock from "./icon/Lock";
export default function BuySection() {
  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis();

  const connectButton = async () => {
    await enableWeb3();
    if (typeof window !== "undefined") {
      window.localStorage.setItem("connected", "true");
    }
  };

  // useEffect : automaticaly run on load, then, it'll run checking the value again
  // check if wallet is connected
  useEffect(() => {
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
      if (typeof localStorage !== "undefined") {
        if (localStorage.getItem("connected") === "true") {
          console.log("Account details : ", account);
          enableWeb3();
        }
      }
    }
  }, [enableWeb3, isWeb3Enabled]);

  useEffect(() => {
    Moralis.onAccountChanged(account => {
      console.log("Account changed to ", { account });
      if (account == null) {
        // if account is null, then user has disconnected all accounts
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("Null account found");
      }
    });
  });

  // Do things when wallet is disconnecting
  // useEffect(() => {
  //     Moralis.onAccountChanged(account => {
  //       if (detectedAccount !== null) {
  //         if (detectedAccount.localeCompare(account) !== 0) {
  //           console.log("Account changed to ", account);
  //           if (account) {
  //             setDetectedAccount(account);
  //             setNotifyChangedAccount(true); // this will trigger the toast only when the account is changed
  //           }

  //           if (!account) {
  //             // if there is no account, account == null
  //             localStorage.removeItem("connected");
  //             deactivateWeb3();
  //             setWalletIsDisconnected(true);
  //             console.log("Null Account detected");
  //           }
  //         }
  //       }
  //     });
  //   }, [Moralis, account, deactivateWeb3, detectedAccount]);

  return (
    <div className="relative">
      {/* Connect Wallet Section */}
      <div className="absolute w-full h-full bg-white opacity-70 flex justify-center items-center"></div>
      <div className="absolute w-full h-full bg-transparent flex justify-center items-center">
        <div className="flex flex-col space-y-4 items-center justify-center ">
          <Lock />
          {/* <p className="text-grad1" style={{fontSize: '100px'}}><i className="fi fi-rr-lock"></i></p> */}
          <button
            onClick={async () => await connectButton()}
            disabled={isWeb3EnableLoading}
            className="btn-grad-1 px-4"
          >
            <i className="fi fi-sr-wallet"></i> Connect Wallet
          </button>{" "}
          <div className="w-full bg-white h-[24px] px-4 py-4">
            <span className="">
              connected status :{" "}
              {account ? (
                <span className="text-green-400">
                  {account.slice(0, 6)}...{account.slice(account.length - 4)}
                </span>
              ) : (
                <span className="text-red-400">Not Connected</span>
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: " 20px" }}>
        <div className=" col-6 text-center">
          <p className="text-dark2 text-box-sub-title"> Private Sale Price</p>
          <p className="text-box-content"> $0.036</p>
        </div>
        <div className=" col-6 text-center">
          <p className="text-dark2 text-box-sub-title "> Private Sale Goal</p>
          <p className="text-box-content"> $72,000</p>
        </div>
      </div>
      <div className="row" style={{ marginTop: " 20px" }}>
        <div className=" col-6 text-center">
          <p className="text-dark2 text-box-sub-title"> Listing Price</p>
          <p className="text-box-content">$0.045</p>
        </div>
        <div className=" col-6 text-center">
          <p className="text-dark2 text-box-sub-title"> ROI at Listing</p>
          <p className="text-box-content">25%</p>
        </div>
      </div>
      <div className="row text-center" style={{ marginTop: " 20px" }}>
        <div className="col-8">
          <input type="number" className="input-buy text-center" placeholder="please input amount of USDT" />
        </div>
        <div className="col-4 text-start ">
          <div className="flex flex-row space-x-2 items-center fw-semibold">
            =
            <img src="/ypred-coin.png" alt="" style={{ width: " 30px", marginTop: " 0px", marginLeft: " 10px" }} />
            <span id="ypred-amount">0</span>
          </div>
        </div>
      </div>
      <div className="w-full row text-center" style={{ marginTop: " 20px" }}>
        <div className="w-full flex flex-row justify-center space-x-2">
          <button className="btn-grad-1 flex ">
            <i className="fi fi-sr-wallet"></i> Buy with Metamask
          </button>

          <button className="btn-grad-1 ">
            <i className="fi fi-sr-interrogation"></i> Need Help
          </button>
        </div>
      </div>
    </div>
  );
}
