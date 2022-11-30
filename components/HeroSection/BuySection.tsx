import React, { useInsertionEffect } from "react";
import { useMoralis, useChain, useWeb3ExecuteFunction, MoralisProvider } from "react-moralis";
import { useEffect } from "react";
import Lock from "./icon/Lock";
import toast, { ToastBar } from "react-hot-toast";
import { BigNumber, ethers } from "ethers";
import { YPredictPrivateSale_ABI, YPredictPrivateSale_address } from "../../config/TestNet/YPredictPrivateSale";
import { PrivateSaleVesting_ABI, PrivateSaleVesting_Address } from "../../config/TestNet/PrivateSaleVesting";
import { USDC_ABI, USDC_ContractAddress } from "../../config/TestNet/USDC";
import { whitelist } from "../../config/whitelist/whitelist";

import { error } from "console";
import Moralis from "moralis-v1/types";

// import WalletConnectProvider from "@walletconnect/web3-provider";
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
// import Web3Modal from "web3modal";

/**
 * @name: get Allocated amount of YPredict token for the user from the contract PrivateSaleVesting
 * @action: result of this function, it will set the state of userNUmberOfTokens
 * @param userAddress : User Address
 * @param contract_Address : Contract Address
 * @param Contract_ABI : Contract ABI
 * @param useState_UserNumberOfTokens : useState for User Number of Tokens
 * @param Moralis : it's from useMoralis
 *
 */
const GetUserAllocatedTokens = async (
  userAddress: string,
  contract_Address,
  Contract_ABI,
  useState_UserNumberOfTokens,
  Moralis
) => {
  const readOptions = {
    contractAddress: contract_Address,
    functionName: "getAllocatedTokens",
    abi: Contract_ABI,
    params: {
      beneficiary: userAddress,
    },
  };
  const message = await Moralis.executeFunction(readOptions);
  useState_UserNumberOfTokens(message);
};

export default function BuySection(props: {
  showModal;
  setShowModal;
  showBuyTokenModal;
  setShowBuyTokenModal;
  stepsStatus;
  setStepsStatus;
}) {
  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis();
  const { chain } = useChain();
  const [newAccount, setNewAccount] = React.useState<string | null>(null);
  const [detectedAccount, setDetectedAccount] = React.useState<string | null>(null);
  const [walletIsDisconnected, setWalletIsDisconnected] = React.useState<boolean>(false);
  const testButton_Ref = React.useRef<HTMLButtonElement>(null);
  const [userNumberOfTokens, setUserNumberOfTokens] = React.useState<BigNumber | null>(null); // this will be BigNumber
  const [ypredAmountToBuy, setYpredAmountToBuy] = React.useState("2"); // this will be the amount of YPredict token to buy
  const [ypredUSDT_price_PerToekn, setYpredUSDT_price_PerToekn] = React.useState(null); // this will be the price of YPredict token in USDT
  const [is_Step_1_transaction_moining, setIs_Step_1_transaction_moining] = React.useState(false);
  const [Is_step_2_begin, setIs_step_2_begin] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputState, setInputState] = React.useState<string>("0");
  const [tokenAmount_By_USDT, setTokenAmount_By_USDT] = React.useState<string>("0");

  const connectButton = async () => {
    props.setShowModal(true);
    // await enableWeb3();
    // if (typeof window !== "undefined") {
    //   window.localStorage.setItem("connected", "true");
    // }
  };

  // ** this will get YPRED Price & number of token user has in BigNumber, and only when user connected to the wallet
  // ** and ypredUSDT_price_PerToekn is not null, so it will only run once when user connected to the wallet
  // ** same thing with userNUmberOfTokens
  useEffect(() => {
    if (account && ypredUSDT_price_PerToekn === null) {
      const getYPRED_Price_Per_tokene = async () => {
        const readOptions = {
          contractAddress: YPredictPrivateSale_address,
          functionName: "s_usdtPrice",
          abi: YPredictPrivateSale_ABI,
          // params: {
          //   owner: account,
          //   spender: YPredictPrivateSale_address,
          // },
        };
        const message = await Moralis.executeFunction(readOptions);
        setYpredUSDT_price_PerToekn(message.toString()); // set YPRED Price in BigNumber
        // let's get how many tokens allocated for the user
        const readOptions2 = {
          contractAddress: PrivateSaleVesting_Address,
          functionName: "getAllocatedTokens",
          abi: PrivateSaleVesting_ABI,
          params: {
            beneficiary: account,
          },
        };
        const message2 = await Moralis.executeFunction(readOptions2);
        setUserNumberOfTokens(BigNumber.from(message2.toString()));
      };
      getYPRED_Price_Per_tokene();
    }
  }, [Moralis, account, ypredUSDT_price_PerToekn]);

  // ** NOTE : useEffect : automaticaly run on load, then, it'll run checking the value again
  // ** check if wallet is connected
  useEffect(() => {
    // check if wallet is connected
    if (isWeb3Enabled) {
      return;
    }
    // if (typeof window !== "undefined") {
    //   if (typeof localStorage !== "undefined") {
    //     if (localStorage.getItem("connected") === "true") {
    //       console.log("Account details : ", account);
    //       // enableWeb3();
    //     }
    //   }
    // }
  }, [account, enableWeb3, isWeb3Enabled]);

  // check on Account Changing
  useEffect(() => {
    Moralis.onAccountChanged(account => {
      console.log("Account changed to ", { account });
      if (account == null) {
        // if account is null, then user has disconnected all accounts
        deactivateWeb3();
        setWalletIsDisconnected(true);
        console.log("Null account found");
      } else {
        setNewAccount(account);
      }
    });
  });
  // ** this will get user allocated tokens from the contract PrivateSaleVesting, and assign it to the state userNumberOfTokens
  // ** NOTE : useEffect : automaticaly run on load, then, it'll run checking the value again
  useEffect(() => {
    if (isWeb3Enabled && account) {
      console.log("useEffect() is executed..... getting user allocated tokens");
      // ** Todo : continue grap how much token the user has, so you can use it later
      //**  to check if a user has succefully bough new token and the transaction is mined
      GetUserAllocatedTokens(
        account,
        PrivateSaleVesting_Address,
        PrivateSaleVesting_ABI,
        setUserNumberOfTokens,
        Moralis
      );
    }
  }, [Moralis, account, isWeb3Enabled]);
  // ** Notify user wallet is connected
  useEffect(() => {
    if (isWeb3Enabled) {
      toast.success(`Wallet connected ${account.slice(0, 6)}...${account.slice(account.length - 4)}`); // notify user by a notification
      if (!whitelist.includes(account.toLocaleLowerCase())) {
        toast.error("You are not whitelisted, request Whitelist from the team");
      }
    }
  }, [isWeb3Enabled]);
  // ** Notify user if the wallet is disconnected
  useEffect(() => {
    if (walletIsDisconnected) {
      toast.error("Wallet disconnected"); // notify user by a notification
      setWalletIsDisconnected(false); // reset the state
    }
  }, [walletIsDisconnected]);

  // ** Notify Account is changed
  useEffect(() => {
    if (account && newAccount && newAccount != detectedAccount) {
      toast.success(`Account changed ${account.slice(0, 6)}...${account.slice(account.length - 4)}`);
      if (!whitelist.includes(account.toLocaleLowerCase())) {
        toast.error("You are not whitelisted, request Whitelist from the team");
      }
      setDetectedAccount(newAccount);
    }
  }, [newAccount, detectedAccount, account]);

  //** Display values when com is re-rendered
  console.log("Account list : ", account);
  if (userNumberOfTokens) {
    console.log("User Allocated Tokens : ", ethers.utils.formatEther(userNumberOfTokens.toString()));
  }

  //** */ this will execture when Is_Step_1_transaction_moining is changed to true
  useEffect(() => {
    if (is_Step_1_transaction_moining) {
      console.log("Step 1 waiting transaction to be mined is begining*********************************");
      const AwaitTransactionMined_Interval = setInterval(async () => {
        console.log("interval for waiting step 1 transaction status....");
        const readOptions = {
          contractAddress: USDC_ContractAddress,
          functionName: "allowance",
          abi: USDC_ABI,
          params: {
            owner: account,
            spender: YPredictPrivateSale_address,
          },
        };
        const message = await Moralis.executeFunction(readOptions);
        // TODO : continue here, you need to fix MaxListern\ExceedeWarnings by copying code from here, and put it in another interval
        const approvedValueToSpend = BigNumber.from(ypredAmountToBuy)
          .mul(BigNumber.from(ypredUSDT_price_PerToekn))
          .toString();
        if (message.toString() === approvedValueToSpend.toString()) {
          props.stepsStatus.step_1.status = "success";
          props.setStepsStatus({ ...props.stepsStatus });
          toast.success("Transaction mined successfully");
          console.log("Transaction is mined!!!!!!!!");
          setIs_Step_1_transaction_moining(false);
          setIs_step_2_begin(true);
          clearInterval(AwaitTransactionMined_Interval);
        }
      }, 1000);
    }
  }, [Moralis, account, is_Step_1_transaction_moining, props, ypredAmountToBuy, ypredUSDT_price_PerToekn]);
  // ** this will execture when is_step_2_begin is changed to true, that means step 1 is done, and step 2 is begining
  useEffect(() => {
    if (Is_step_2_begin) {
      setIs_step_2_begin(false); // stop this to not execute next time
      const step2 = async () => {
        console.log("Step 2 is begining*********************************");
        // ** next step 2 : request to approve the transaction
        props.stepsStatus.step_2.status = "waiting_approve";
        props.setStepsStatus({ ...props.stepsStatus });

        const sendOptions = {
          contractAddress: YPredictPrivateSale_address,
          functionName: "buyTokens",
          abi: YPredictPrivateSale_ABI,
          params: {
            amount: ypredAmountToBuy,
          },
        };
        let transaction: Moralis.ExecuteFunctionResult = null; // this will be used to track the transaction later
        let IsErrorOccured = false; // this will be used to track if an error occured
        await Moralis.executeFunction(sendOptions)
          .then(async res => {
            console.log("result of calling buyTokens: ", res);
            transaction = res;
            //**  Note : now will tell the user to wait the transaction to be mined
            props.stepsStatus.step_2.status = "waiting_transaction_Mining";
            // ** Note : we will check now the allocated token for the user and see if the transaction is mined
            // ** Note : it should be in Interval so we can check every 1 second if the transaction is mined

            console.log("step 2 : transaction result : ", transaction);
            //* create this interval when transaction is not null
            if (transaction != null) {
              props.stepsStatus.step_2.status = "waiting_transaction_Mining";
              props.setStepsStatus({ ...props.stepsStatus });
              const AwaitTransactionMined_Interval = setInterval(async () => {
                console.log("Interval for waiting step 2 transaction status....");
                const readOptions = {
                  contractAddress: PrivateSaleVesting_Address,
                  functionName: "getAllocatedTokens",
                  abi: PrivateSaleVesting_ABI,
                  params: {
                    beneficiary: account,
                  },
                };
                const message = await Moralis.executeFunction(readOptions);
                console.log("Interval, result of calling getAllocatedTokens: ", message.toString());
                const allocatedToken_before = ethers.utils.formatEther(userNumberOfTokens.toString());
                const allocatedToken_After = ethers.utils.formatEther(message.toString());
                const requestedNumberOfTokens = ethers.utils.formatEther(
                  BigNumber.from(ypredAmountToBuy).mul(BigNumber.from("1000000000000000000")).toString()
                );

                console.log("allocatedToken_before : ", allocatedToken_before);
                console.log("allocatedToken_After : ", allocatedToken_After);
                console.log("requestedNumberOfTokens : ", requestedNumberOfTokens);
                // ** checking if the transaction is mined that means checking if there is a change in the allocated token
                //**  check if the requested number of tokens is equal to allocated token before + allocated token after
                // if(parseFloat(allocatedToken_After)===parseFloat(requestedNumberOfTokens)){
                if (
                  parseFloat(allocatedToken_before) + parseFloat(requestedNumberOfTokens) ===
                  parseFloat(allocatedToken_After)
                ) {
                  props.stepsStatus.step_2.status = "success";
                  props.stepsStatus.step_3.status = "success";
                  props.setStepsStatus({ ...props.stepsStatus });
                  setYpredAmountToBuy("0");// reset the amount to buy
                  setTokenAmount_By_USDT("0");// state for display next to input, reset the amount to buy
                  inputRef.current.value = "0";// reset the input value
                  setUserNumberOfTokens(BigNumber.from(allocatedToken_After.split(".")[0]).mul(BigNumber.from("1000000000000000000")));
                  toast.success("Transaction is Confirmed");
                  console.log("**************** this is the token after **********", allocatedToken_After);
                  setUserNumberOfTokens(BigNumber.from(message)); // set user new number of tokens, from the result of allocatedTokens
                  setIs_step_2_begin(false); // return false to the state step 2
                  clearInterval(AwaitTransactionMined_Interval);
                }
              }, 3000);
            }
          })
          .catch(error => {
            console.log("error Occured while calling approve: ", error);
            IsErrorOccured = true;
            toast.error("Error Occured while approving transaction");
            props.stepsStatus.step_2.status = "error";
            props.setStepsStatus({ ...props.stepsStatus });
            setIs_step_2_begin(false); // return false to the state step 2
          });
      };
      // ** this is where we call step2 because it's an async function
      // ** next try catch is used to handle an error it doesn't appear always but sometimes it appears
      step2();
    }
  }, [Is_step_2_begin, Moralis, account, props, userNumberOfTokens, ypredAmountToBuy]);

  console.log("ButSection is re-rendered!!!!!");

  // TODO : fix a user if not in whitelist it should not be able to buy tokens, and show to him that he is not in whitelist

  const clickTestButton_Action = async () => {
    props.stepsStatus.step_1.status = "waiting_approve";
    props.setShowBuyTokenModal(true);
  };

  const clickTestButton = () => {
    console.log("Test Button Clicked!");
    props.stepsStatus.step_1.status = "waiting_approve";
    props.setStepsStatus(props.stepsStatus);
    props.setShowBuyTokenModal(true);
    const approveUSDC = async () => {
      //** Uncomment here to get the transaction */
      console.log("-----------------");

      //** Approve USDC to be spent by the contract */
      let IsErrorOccured = false;
      let transaction: Moralis.ExecuteFunctionResult = null;
      const approvedValueToSpend = BigNumber.from(ypredAmountToBuy)
        .mul(BigNumber.from(ypredUSDT_price_PerToekn))
        .toString();
      const sendOptions = {
        contractAddress: USDC_ContractAddress,
        functionName: "approve",
        abi: USDC_ABI,
        params: {
          spender: YPredictPrivateSale_address,
          amount: approvedValueToSpend,
        },
      };

      // ** TODO : continue here fix loading it should shows the time for waiting the approval
      await Moralis.executeFunction(sendOptions)
        .then(res => {
          console.log("result of calling approve: ", res);
          transaction = res;
        })
        .catch(error => {
          console.log("error Occured while calling approve: ", error);
          IsErrorOccured = true;
          toast.error("Error in Approving USDT transaction");
          props.stepsStatus.step_1.status = "error";
          props.setStepsStatus({ ...props.stepsStatus });
        });

      if (!IsErrorOccured || transaction != null) {
        props.stepsStatus.step_1.status = "waiting_transaction_Mining";
        props.setStepsStatus({ ...props.stepsStatus });
        setIs_Step_1_transaction_moining(true);
      }
    };
    approveUSDC();

    console.log("Clicked on Test Button action finished!");
  };

  const ISNotConnected = () => {
    return (
      <>
        <div className="absolute w-full h-full bg-white opacity-80 flex justify-center items-center"></div>
        <div className="absolute w-full h-full bg-transparent flex justify-center items-center">
          <div className="flex flex-col space-y-4 items-center justify-center ">
            <Lock />
            <button
              onClick={async () => await connectButton()}
              disabled={isWeb3EnableLoading}
              className="btn-grad-1 px-4"
            >
              <i className="fi fi-sr-wallet"></i> Connect Wallet
            </button>

            {/* <button ref={testButton_Ref} onClick={async () => await clickTestButton()} className="bg-red-400 px-24 py-3">
            Click
            </button>
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
              </div> */}
          </div>
        </div>
      </>
    );
  };

  const IsNot_In_whitelist = () => {
    return (
      <>
        <div className="row align-items-center bg-green-50 mt-4 flex justify-center items-center p-3">
          <div className="col-md-12 ">
            <div className="flex space-x-2 justify-center items-center  " style={{ fontSize: " 13px" }}>
              <span className="text-green-700">You&apos;re not allowlisted for private sale</span>
              <button
                className="px-3  py-2 rounded bg-green-700 text-white text-md"
                style={{ fontSize: "12px" }}
                type="button"
              >
                <i className="fi fi-rr-edit"></i> Request Whitelist
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full bg-white opacity-80 flex justify-center items-center"></div>
        <div className="absolute w-full h-full bg-transparent flex justify-center items-center">
          <div className="flex flex-col space-y-4 items-center justify-center ">
            <Lock />
            <button
              onClick={async () => await connectButton()}
              disabled={isWeb3EnableLoading}
              className="btn-grad-1 px-4"
            >
              <i className="fi fi-sr-wallet"></i> Connect Wallet
            </button>

            {/* <button ref={testButton_Ref} onClick={async () => await clickTestButton()} className="bg-red-400 px-24 py-3">
          Click
          </button>
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
            </div> */}
          </div>
        </div>
      </>
    );
  };
  const handleInputChange = event => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "") {
      inputRef.current.value = "0";
    } else if (re.test(event.target.value)) {
      setInputState(event.target.value);
      const NumberOfToken_from_USDT = BigNumber.from(
        BigNumber.from("1000000").mul(BigNumber.from(event.target.value))
      ).div(BigNumber.from("36000"));
      setTokenAmount_By_USDT(NumberOfToken_from_USDT.toString());
      setYpredAmountToBuy(NumberOfToken_from_USDT.toString()); // this will state that passed to buy button function
    } else {
      inputRef.current.value = inputState;
    }
  };
  const convertPriceTokenBigNumberToUSDT_Tofixed_3 = priceBigNumberToString => {
    const priceTokenFloat = parseFloat(priceBigNumberToString);
    const priceUSDTFloat = parseFloat("1000000");
    const tokenPrice = (priceTokenFloat / priceUSDTFloat).toFixed(3);
    return tokenPrice.toString();
  };
  const convertYPREDAllocatedTokentoNumber=()=>{
    return(BigNumber.from(userNumberOfTokens).div(BigNumber.from("1000000000000000000")).toString())
  }
  console.log("Input value : ", inputState);
  console.log("Token To buy, by typed USDT value : ", tokenAmount_By_USDT);

  return (
    <>
      {/* Your are not Whitelisted */}

      <div className="relative">
        {/* Connect Wallet Section */}
        {account ? whitelist.includes(account.toLowerCase()) ? <></> : <IsNot_In_whitelist /> : <ISNotConnected />}
        <div className="row" style={{ marginTop: " 20px" }}>
          <div className=" col-6 text-center">
            <p className="text-dark2 text-box-sub-title"> Private Sale Price</p>
            <p className="text-box-content">
              {"$"}
              {ypredUSDT_price_PerToekn
                ? convertPriceTokenBigNumberToUSDT_Tofixed_3(ypredUSDT_price_PerToekn)
                : "0.036"}
            </p>
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
        <div className="row flex justify-center text-center items-center" style={{ marginTop: " 20px" }}>
          <div className="col-8">
            <input
              ref={inputRef}
              onChange={handleInputChange}
              // defaultValue={0}
              type="number"
              className="input-buy border-4 text-center placeholder-gray-500"
              placeholder="please input amount of USDT"
            />
            {/* <span className=" font-semibold">USDT</span> */}
          </div>
          {/* <input type="number" className="border-4 border-rose-800" placeholder="please input amount of USDT"/> */}
          <div className="col-4 text-start ">
            <div className="flex flex-row space-x-2 items-center fw-semibold">
              =
              <img src="/ypred-coin.png" alt="" style={{ width: " 30px", marginLeft: " 10px" }} />
              <span id="ypred-amount">{tokenAmount_By_USDT}</span>
            </div>
          </div>
        </div>
        <div className="w-full row text-center" style={{ marginTop: " 20px" }}>
          <div className="py-2">
            <span className="text-sm font-medium">
              You own{" "}
              {userNumberOfTokens ? convertYPREDAllocatedTokentoNumber() : "0"}
              {" "}YPRED
            </span>
          </div>
          <div className="w-full flex flex-row justify-center space-x-2">
            <button onClick={async ()=>clickTestButton()} className="btn-grad-1 flex ">
              <i className="fi fi-sr-wallet"></i> Buy with Metamask
            </button>

            <button className="btn-grad-1 ">
              <i className="fi fi-sr-interrogation"></i> Need Help
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
