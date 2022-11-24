import React from "react";
import { useMoralis, useChain } from "react-moralis";
import { useEffect } from "react";
import Lock from "./icon/Lock";
import toast from "react-hot-toast";

// import WalletConnectProvider from "@walletconnect/web3-provider";
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
// import Web3Modal from "web3modal";

export default function BuySection(props: { showModal; setShowModal }) {
  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis();
  const { chain } = useChain();
  const [newAccount, setNewAccount] = React.useState<string | null>(null);
  const [detectedAccount, setDetectedAccount] = React.useState<string | null>(null);
  const [walletIsDisconnected, setWalletIsDisconnected] = React.useState<boolean>(false);
  const connectButton = async () => {
    props.setShowModal(true);
    // await enableWeb3();
    // if (typeof window !== "undefined") {
    //   window.localStorage.setItem("connected", "true");
    // }
  };

  //   const activateProvider = async () => {
  //     const providerOptions = {
  //       injected: {
  //         display: {
  //           name: "Metamask",
  //           description: "Connect with the provider in your Browser",
  //         },
  //         package: null,
  //       },
  //       walletconnect: {
  //         package: WalletConnectProvider,
  //         options: {
  //           bridge: "https://bridge.walletconnect.org",
  //           infuraId: infuraId,
  //         },
  //       },
  //       coinbasewallet: {
  //         package: CoinbaseWalletSDK,
  //         options: {
  //           appName: "Y Predict",
  //           infuraId: infuraId,
  //           rpc: rpcUrl,
  //           chainId: supportedChainId,
  //           darkMode: false,
  //         },
  //       },
  //     };

  //     const web3Modal = new Web3Modal({
  //       providerOptions,
  //     });
  //     try {
  //       const provider = await web3Modal.connect();
  //       //customToast.success('Successfully Connected');
  //       const response = await activate(provider);
  //       console.log("response - ", response);
  //     } catch (error) {
  //       // customToast.error(error);
  //     }
  //   };

  // useEffect : automaticaly run on load, then, it'll run checking the value again
  // check if wallet is connected
  useEffect(() => {
    // check if wallet is connected
    if (isWeb3Enabled) {
      return;
    }
    if (typeof window !== "undefined") {
      if (typeof localStorage !== "undefined") {
        if (localStorage.getItem("connected") === "true") {
          console.log("Account details : ", account);
          enableWeb3();
        }
      }
    }
  }, [account, enableWeb3, isWeb3Enabled]);

  // check on Account Changing
  useEffect(() => {
    Moralis.onAccountChanged(account => {
      console.log("Account changed to ", { account });
      if (account == null) {
        // if account is null, then user has disconnected all accounts
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        setWalletIsDisconnected(true);
        console.log("Null account found");
      } else {
        setNewAccount(account);
      }
    });
  });

  useEffect(() => {
    if (isWeb3Enabled) {
      toast.success("Wallet connected"); // notify user by a notification
      if (typeof window !== "undefined") {
        window.localStorage.setItem("connected", "true");
      }
    }
  }, [isWeb3Enabled]);

  useEffect(() => {
    if (walletIsDisconnected) {
      toast.error("Wallet disconnected"); // notify user by a notification
      setWalletIsDisconnected(false); // reset the state
    }
  }, [walletIsDisconnected]);

  useEffect(() => {
    if (newAccount && newAccount != detectedAccount) {
      toast.success("Account Changed");
      setDetectedAccount(newAccount);
    }
  }, [newAccount, detectedAccount]);

  console.log("Account list : ", account);

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

          <div className="w-full flex flex-col justify-center items-center bg-white px-4 py-4">
            <span className="">Development Testing</span>
            <span className="">-------------------</span>
            <span className="">
              connected status :{" "}
              {account ? (
                <div className="flex flex-col spacey-y-2">
                  <span className="text-green-400">
                    {account.slice(0, 6)}...{account.slice(account.length - 4)}
                  </span>
                  <span className="">
                    Chain : <span className="text-green-400">{parseInt(chain.chainId)}</span>{" "}
                  </span>
                </div>
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
