import React, { useInsertionEffect, useRef } from "react";
import { useMoralis, useChain, useWeb3ExecuteFunction, MoralisProvider } from "react-moralis";
import { useEffect } from "react";
import Lock from "./icon/Lock";
import toast, { ToastBar } from "react-hot-toast";
import { BigNumber, ethers } from "ethers";
import { YPredictPrivateSale_ABI, YPredictPrivateSale_address } from "../../config/Mainnet/YPredictPrivateSale";
import { PrivateSaleVesting_ABI, PrivateSaleVesting_Address } from "../../config/Mainnet/PrivateSaleVesting";
import { USDT_ABI, USDT_ContractAddress } from "../../config/Mainnet/USDT";
import { whitelist } from "../../config/whitelist/whitelist";

import { error } from "console";
import Moralis from "moralis-v1/types";
import { useRouter } from "next/router";

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
// * this function will return if desiredAmountToAllow if greater than the balance of USDT of the user.
/**
 *
 * @param contract_Address : the contract address of USDT in mainnet or USDC in testnet
 * @param contract_ABI : contract ABI
 * @param userAddress : user account address, it should be passed as account from useMoralis
 * @param desiredAmountToAllow : this should be the amount of USDT(mainnet) or USDC(testnet) that user wanted to allow
 * @param Moralis : it's from useMoralis pass it to this function
 * @returns
 */
const checkUserIfhadUSDT = async (contract_Address, contract_ABI, userAddress, desiredAmountToAllow, Moralis) => {
  const readOptions = {
    contractAddress: contract_Address,
    functionName: "balanceOf",
    abi: contract_ABI,
    params: {
      account: userAddress,
    },
  };
  // * Note : USDT has 6 decimals
  const message = await Moralis.executeFunction(readOptions); // this should return BigNumber,

  return BigNumber.from(message.toString()).gte(desiredAmountToAllow);
};

/* eslint-disable @next/next/no-img-element */
export default function BuySection(props: {
  showModal;
  setShowModal;
  showBuyTokenModal;
  setShowBuyTokenModal;
  stepsStatus;
  setStepsStatus;
}) {
  const { web3, enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis();
  const { chain } = useChain();
  const [newAccount, setNewAccount] = React.useState<string | null>(null);
  const [detectedAccount, setDetectedAccount] = React.useState<string | null>(null);
  const [walletIsDisconnected, setWalletIsDisconnected] = React.useState<boolean>(false);
  const testButton_Ref = React.useRef<HTMLButtonElement>(null);
  const [userNumberOfTokens, setUserNumberOfTokens] = React.useState<BigNumber | null>(null); // this will be BigNumber
  const [ypredAmountToBuy, setYpredAmountToBuy] = React.useState("0"); // this will be the amount of YPredict token to buy
  const [ypresUSDT_price_PerToekn, setYpredUSDT_price_PerToekn] = React.useState(null); // this will be the price of YPredict token in USDT
  const [is_Step_1_transaction_moining, setIs_Step_1_transaction_moining] = React.useState(false);
  const [Is_step_2_begin, setIs_step_2_begin] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputState, setInputState] = React.useState<string>("0");
  const [tokenAmount_By_USDT, setTokenAmount_By_USDT] = React.useState<string>("0");
  const [minAmountToInvest, setMinAmountToInvest] = React.useState<string>("0"); // this will be fetched from the contract
  const [showMinimumMessage, setShowMinimumMessage] = React.useState<boolean>(false);
  const [chainId, setChainID] = React.useState<number>(1); // Mumbai ChainId
  const [ChainIdDev, setChainIdDev] = React.useState<number>(137); // we testing in this chain
  const butButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  // this image tracker has two elements, status of the image tracker and the amount of YPredict token bought
  type imgTracker = [boolean, number];
  const [isImgTrackerShown, setIsImgTrackerShown] = React.useState<imgTracker>([false, 0]);

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
    if (account && ypresUSDT_price_PerToekn === null && chainId == ChainIdDev) {
      console.log("Chain Id in useEffect : ", Moralis.chainId);
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
        //** */ let's get how many tokens allocated for the user
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
        //** let's get the minumum amount of USDT to Invest
        const readOptions3 = {
          contractAddress: YPredictPrivateSale_address,
          functionName: "s_minAmountToInvest",
          abi: YPredictPrivateSale_ABI,
          // params: {
          //   beneficiary: account,
          // },
        };
        const message3 = await Moralis.executeFunction(readOptions3);
        let minAmountToInvest = BigNumber.from(message3.toString()).div(BigNumber.from("1000000")).toString();
        if (parseInt(minAmountToInvest) == 0) {
          minAmountToInvest = (parseFloat(message3.toString()) / parseFloat("1000000")).toFixed(3);
        }
        setMinAmountToInvest((parseFloat(minAmountToInvest) + 1).toString());
      };
      getYPRED_Price_Per_tokene();
    }
  }, [ChainIdDev, Moralis, account, chainId, ypresUSDT_price_PerToekn]);

  // ** NOTE : useEffect : automatically run on load, then, it'll run checking the value again
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

  // ** check on Account Changing
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
    if (isWeb3Enabled && account && chainId == ChainIdDev) {
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
  }, [ChainIdDev, Moralis, account, chainId, isWeb3Enabled]);

  // ** Notify user wallet is connected only when user ONLY!! using the network provided
  useEffect(() => {
    if (isWeb3Enabled) {
      if (!(chainId == ChainIdDev)) {
        const switchNetwork = async () => {
          try {
            await Moralis.switchNetwork(ChainIdDev);
          } catch (error) {
            toast.error("Please switch to Polygon network");
            // alert(error.message);
            //* Check if the user doesn't have netWork in his wallet
            if (error.code == 4902) {
              toast.error("Please allow to add Polygon network in your wallet");
              const chainId = 137;
              const chainName = "Matic Mainnet";
              const currencyName = "MATIC";
              const currencySymbol = "MATIC";
              const rpcUrl = "https://polygon-rpc.com/";
              const blockExplorerUrl = "https://polygonscan.com/";
              try {
                await Moralis.addNetwork(chainId, chainName, currencyName, currencySymbol, rpcUrl, blockExplorerUrl);
              } catch (error) {
                toast.error("something happened will trying to add network");
              }
            }
          }
        };
        switchNetwork();
      }
      // else {
      //   toast.success(`Wallet connected ${account.slice(0, 6)}...${account.slice(account.length - 4)}`); // notify user by a notification
      //   if (!whitelist.includes(account.toLocaleLowerCase())) {
      //     toast.error("You are not whitelisted, request Whitelist from the team");
      //   }else{
      //     toast.success("You are whitelisted");
      //   }
      // }
    }
  }, [ChainIdDev, Moralis, chainId, isWeb3Enabled]);
  //** notify user wallet connected
  useEffect(() => {
    if (isWeb3Enabled) {
      toast.success(`Wallet connected`); // notify user by a notification
    }
  }, [isWeb3Enabled]);
  // ** notify user if he's whitelisted or not
  useEffect(() => {
    if (account) {
      if (!whitelist.includes(account.toLocaleLowerCase())) {
        toast.error("You are not whitelisted, request Whitelist from the team");
      } else {
        toast.success("You are whitelisted");
      }
    }
  }, [account]);

  // **
  useEffect(() => {
    if (account) {
      console.log("useEffect, Changing chainId to : ", chainId);
      setChainID(parseInt(Moralis.chainId));
    }
  }, [Moralis.chainId, account, chainId]);
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
      setDetectedAccount(newAccount);
    }
  }, [newAccount, detectedAccount, account]);

  //** Display values when com is re-rendered
  console.log("Account list : ", account);

  //** */ this will execture when Is_Step_1_transaction_moining is changed to true
  useEffect(() => {
    if (is_Step_1_transaction_moining) {
      console.log("Step 1 waiting transaction to be mined is begining*********************************");
      const AwaitTransactionMined_Interval = setInterval(async () => {
        console.log("interval for waiting step 1 transaction status....");
        const readOptions = {
          contractAddress: USDT_ContractAddress,
          functionName: "allowance",
          abi: USDT_ABI,
          params: {
            owner: account,
            spender: YPredictPrivateSale_address,
          },
        };
        // //! Note : this variable should be removed later, it's just for testing
        // const ypredAmountToBuy="10";
        const message = await Moralis.executeFunction(readOptions);
        const approvedValueToSpend = BigNumber.from(ypredAmountToBuy)
          .mul(BigNumber.from(ypresUSDT_price_PerToekn))
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
  }, [Moralis, account, is_Step_1_transaction_moining, props, ypredAmountToBuy, ypresUSDT_price_PerToekn]);
  // ** this will execture when is_step_2_begin is changed to true, that means step 1 is done, and step 2 is begining
  useEffect(() => {
    if (Is_step_2_begin) {
      setIs_step_2_begin(false); // stop this to not execute next time
      const step2 = async () => {
        console.log("Step 2 is begining*********************************");
        // ** next step 2 : request to approve the transaction
        props.stepsStatus.step_2.status = "waiting_approve";
        props.setStepsStatus({ ...props.stepsStatus });
        //! Note : this variable should be removed later, it's just for testing
        // const ypredAmountToBuy="10";
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
                  //* Show the image tracker, and set the amount of tokens that is bought
                  setIsImgTrackerShown([true, Number(inputState)]);
                  props.stepsStatus.step_2.status = "success";
                  props.stepsStatus.step_3.status = "success";
                  props.setStepsStatus({ ...props.stepsStatus });
                  setYpredAmountToBuy("0"); // reset the amount to buy
                  setTokenAmount_By_USDT("0"); // state for display next to input, reset the amount to buy
                  inputRef.current.value = ""; // reset the input value
                  setInputState("0");
                  setUserNumberOfTokens(
                    BigNumber.from(allocatedToken_After.split(".")[0]).mul(BigNumber.from("1000000000000000000"))
                  );
                  butButtonRef.current.disabled = false;
                  console.log("buy Button Enabled");
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
            butButtonRef.current.disabled = false;
            console.log("buy Button Enabled");
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
  }, [Is_step_2_begin, Moralis, account, inputState, props, userNumberOfTokens, ypredAmountToBuy]);

  console.log("ButSection is re-rendered!!!!!");

  const clickTestButton_Action = async () => {
    props.stepsStatus.step_1.status = "waiting_approve";
    props.setShowBuyTokenModal(true);
  };
  //  TODO : everything is working fine for in Testnet now, we need to test it in Mainnet
  const clickTestButton = async () => {
    console.log("Buy Button Clicked!");
    butButtonRef.current.disabled = true; // disable buy token button
    inputRef.current.value.replace(" ", "") === "";
    if (inputRef.current.value === "") {
      console.log("Input is Empty!!!!!");
      butButtonRef.current.disabled = false;
      console.log("buy Button Enabled");
      toast.error("Please enter a value");
      return;
    }
    console.log("clicked button, minimum Amount : ", minAmountToInvest);
    //* test if the user typed minimum amount of tokens to buy
    if (parseFloat(inputRef.current.value.toString()) < parseFloat(minAmountToInvest.toString())) {
      butButtonRef.current.disabled = false;
      console.log("buy Button Enabled");
      toast.error("Minimum Amount is " + minAmountToInvest);
      butButtonRef.current.disabled = false;
      return;
    }
    const approvedValueToSpend = BigNumber.from(ypredAmountToBuy)
      .mul(BigNumber.from(ypresUSDT_price_PerToekn))
      .toString();
    const hasUSDT = await checkUserIfhadUSDT(USDT_ContractAddress, USDT_ABI, account, approvedValueToSpend, Moralis);
    if (!hasUSDT) {
      butButtonRef.current.disabled = false;
      console.log("buy Button Enabled");
      toast.error("You don't have enough USDT");
      return;
    }
    const IsWhiteListed = whitelist.includes(account.toLocaleLowerCase());
    if (!IsWhiteListed) {
      toast.error("You are not whitelisted");
      butButtonRef.current.disabled = false; // set buy token enabled
      return;
    }
    //* hide Img Tracking before buying token
    setIsImgTrackerShown([false, 0]);
    // * show Buy Token Modal progress bar,
    props.stepsStatus.step_1.status = "waiting_approve"; // change step 1 state to "waiting_approve"
    props.setStepsStatus(props.stepsStatus); // set the state
    props.setShowBuyTokenModal(true); // show buy token Modal
    const approveUSDC = async () => {
      //** Uncomment here to get the transaction */
      console.log("-----------------");

      //** Approve USDC to be spent by the contract */
      let IsErrorOccured = false;
      let transaction: Moralis.ExecuteFunctionResult = null;
      const approvedValueToSpend = BigNumber.from(ypredAmountToBuy)
        .mul(BigNumber.from(ypresUSDT_price_PerToekn))
        .toString();
      const sendOptions = {
        contractAddress: USDT_ContractAddress,
        functionName: "approve",
        abi: USDT_ABI,
        params: {
          spender: YPredictPrivateSale_address,
          amount: approvedValueToSpend,
        },
      };

      await Moralis.executeFunction(sendOptions)
        .then(res => {
          console.log("result of calling approve: ", res);
          transaction = res;
        })
        .catch(error => {
          console.log("error Occured while calling approve: ", error);
          butButtonRef.current.disabled = false;
          console.log("buy Button Enabled");
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
  const clickTestButton_2 = async () => {
    const ypredAmountToBuy = "10";
    //* hide Img Tracking before buying token
    setIsImgTrackerShown([false, 0]);
    // * show Buy Token Modal progress bar,
    props.stepsStatus.step_1.status = "waiting_approve"; // change step 1 state to "waiting_approve"
    props.setStepsStatus(props.stepsStatus); // set the state
    props.setShowBuyTokenModal(true); // show buy token Modal
    const approveUSDC = async () => {
      //** Uncomment here to get the transaction */
      console.log("-----------------");

      //** Approve USDC to be spent by the contract */
      let IsErrorOccured = false;
      let transaction: Moralis.ExecuteFunctionResult = null;
      const approvedValueToSpend = BigNumber.from(ypredAmountToBuy)
        .mul(BigNumber.from(ypresUSDT_price_PerToekn))
        .toString();
      const sendOptions = {
        contractAddress: USDT_ContractAddress,
        functionName: "approve",
        abi: USDT_ABI,
        params: {
          spender: YPredictPrivateSale_address,
          amount: approvedValueToSpend,
        },
      };

      await Moralis.executeFunction(sendOptions)
        .then(res => {
          console.log("result of calling approve: ", res);
          transaction = res;
        })
        .catch(error => {
          console.log("error Occured while calling approve: ", error);
          butButtonRef.current.disabled = false;
          console.log("buy Button Enabled");
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
            {/* <Lock /> */}
            <div className="text-grad1 " style={{ fontSize: " 100px" }}>
              <i className="fi fi-rr-lock"></i>
            </div>
            <button
              onClick={async () => await connectButton()}
              disabled={isWeb3EnableLoading}
              className="btn-grad-1 px-4 -translate-y-8"
            >
              <i className="fi fi-sr-wallet"></i> Connect Wallet
            </button>
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
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdYSC0xnfPZ32ngwHH9TLG964_v9ve_l8MJgpENWdxRF0r5Nw/viewform",
                    "_blank"
                  )
                }
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
            {/* <Lock /> */}
            <div className="text-grad1 " style={{ fontSize: " 100px" }}>
              <i className="fi fi-rr-lock"></i>
            </div>
          </div>
        </div>
      </>
    );
  };

  const IsNotConnectedToPolygon = () => {
    return (
      <>
        <div className="absolute w-full h-full bg-white opacity-80 flex justify-center items-center"></div>
        <div className="absolute w-full h-full bg-transparent flex justify-center items-center">
          <div className="flex flex-col space-y-4 items-center justify-center ">
            {/* <Lock /> */}
            <div className="text-grad1 " style={{ fontSize: " 100px" }}>
              <i className="fi fi-rr-lock"></i>
            </div>
            <button
              onClick={async () => {
                try {
                  await Moralis.switchNetwork(chainId);
                  // await Moralis.addNetwork;
                } catch (error) {
                  toast.error("Please switch to Polygon network");
                  alert(error.message);
                }
              }}
              disabled={isWeb3EnableLoading}
              className="btn-grad-1 px-4 -translate-y-8"
            >
              <i className="fi fi-sr-wallet"></i> Switch Network
            </button>
          </div>
        </div>
      </>
    );
  };
  const IsWhiteListed = () => {
    return (
      <div className="row align-items-center bg-green-50 mt-4 flex justify-center items-center p-3">
        <div className="col-md-12 ">
          <div className="flex space-x-2 justify-center items-center  " style={{ fontSize: " 13px" }}>
            <span className="text-green-700">You&apos;re allowlisted for private sale</span>
          </div>
        </div>
      </div>
    );
  };
  const convertPriceTokenBigNumberToUSDT_Tofixed_3 = priceBigNumberToString => {
    const priceTokenFloat = parseFloat(priceBigNumberToString);
    const priceUSDTFloat = parseFloat("1000000");
    const tokenPrice = (priceTokenFloat / priceUSDTFloat).toFixed(3);
    return tokenPrice.toString();
  };
  const convertYPREDAllocatedTokentoNumber = () => {
    return BigNumber.from(userNumberOfTokens).div(BigNumber.from("1000000000000000000")).toString();
  };

  //* function for USDT selection
  const handleInputChange = event => {
    if (event.target.value === "") {
      inputRef.current.value = "";
    }
    //* this will remove "0" from the beginning of the input
    let inputValue = event.target.value;
    for (let i = 0; i < event.target.value.length; i++) {
      if (event.target.value[i] === "0") {
        inputValue = event.target.value.slice(1, event.target.value.length);
      } else {
        break;
      }
    }
    event.target.value = inputValue;
    const re = /^[0-9\b]+$/;

    if (re.test(event.target.value)) {
      // if he enter a number
      // if the number is less than min amount to invest
      if (parseFloat(event.target.value.toString()) >= parseFloat(minAmountToInvest)) {
        inputRef.current.value = event.target.value;
        setShowMinimumMessage(false); // hide the message of minimum amount
        setInputState(event.target.value); // set the input state
        const NumberOfToken_from_USDT = BigNumber.from(
          BigNumber.from("1000000").mul(BigNumber.from(event.target.value))
        ).div(BigNumber.from(ypresUSDT_price_PerToekn.toString())); // calculate the number of token from USDT
        setTokenAmount_By_USDT(NumberOfToken_from_USDT.toString()); // set the token amount by USDT
        setYpredAmountToBuy(NumberOfToken_from_USDT.toString()); // this will state that passed to buy button function
      } else {
        setShowMinimumMessage(true); // show the message of minimum amount
        setInputState(event.target.value); // set the input state
        inputRef.current.value = event.target.value;
        let mintAmount = minAmountToInvest; // this will reserved to check if amount is minAmount less than 1
        if (parseFloat(minAmountToInvest) < 1) mintAmount = "1";
        const NumberOfToken_from_USDT = BigNumber.from(BigNumber.from("1000000").mul(BigNumber.from(mintAmount))).div(
          BigNumber.from(ypresUSDT_price_PerToekn.toString())
        ); // calculate the number of token from USDT
        setTokenAmount_By_USDT(NumberOfToken_from_USDT.toString()); // set the token amount by USDT
        setYpredAmountToBuy(NumberOfToken_from_USDT.toString()); // this will state that passed to buy button function
      }
    }
  };
  console.log("Input value : ", inputState);
  console.log("Token To buy, by typed USDT value : ", tokenAmount_By_USDT);

  // TODO : add PrivateSaleVesting TimeLeft

  return (
    <>
      {/* Your are not Whitelisted */}

      <div className="relative">
        {/* Connect Wallet Section */}
        {account ? (
          chainId === ChainIdDev ? (
            whitelist.includes(account.toLowerCase()) ? (
              <IsWhiteListed />
            ) : (
              <IsNot_In_whitelist />
            )
          ) : (
            <IsNotConnectedToPolygon />
          )
        ) : (
          <ISNotConnected />
        )}

        <div className="row" style={{ marginTop: " 20px" }}>
          <div className=" col-6 text-center">
            <p className="text-dark2 text-box-sub-title"> Private Sale Price</p>
            <p className="text-box-content">
              {"$"}
              {ypresUSDT_price_PerToekn
                ? convertPriceTokenBigNumberToUSDT_Tofixed_3(ypresUSDT_price_PerToekn)
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

        <div className="w-full flex flex-row space-x-4 justify-center mt-4 mb-4">
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-7 w-7 ">
              <polygon fill="#4db6ac" points="24,44 2,22.5 10,5 38,5 46,22.5" />
              <path
                fill="#fff"
                d="M38,22c0-1.436-4.711-2.635-11-2.929V16h8v-6H13v6h8v3.071C14.711,19.365,10,20.564,10,22	s4.711,2.635,11,2.929V36h6V24.929C33.289,24.635,38,23.436,38,22z M24,24c-6.627,0-12-1.007-12-2.25c0-1.048,3.827-1.926,9-2.176	v3.346c0.96,0.06,1.96,0.08,3,0.08s2.04-0.02,3-0.08v-3.346c5.173,0.25,9,1.128,9,2.176C36,22.993,30.627,24,24,24z"
              />
            </svg>
            <div className="flex flex-col font-normal">
              <input
                ref={inputRef}
                onKeyDown={e => {
                  ["e", "E", "+", "-", ",", "."].includes(e.key) && e.preventDefault();
                }}
                onChange={handleInputChange}
                // defaultValue={0}
                type="number"
                className=" border-b-[1px] border-black outline-0 w-28 sm:w-48 h-10 text-center font-semibold placeholder-gray-500"
                placeholder="USDT - amount"
                min={parseFloat(minAmountToInvest) < 1 ? "1" : minAmountToInvest}
              />
              {showMinimumMessage ? (
                <span className="text-xs">
                  Minimum is {parseFloat(minAmountToInvest) < 1 ? "1" : minAmountToInvest}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="flex flex-row space-x-2 items-center fw-semibold">
            =
            <img src="/ypred-coin.png" alt="" style={{ width: " 30px", marginLeft: " 10px" }} />
            <span id="ypred-amount">{tokenAmount_By_USDT}</span>
          </div>
        </div>
        <div className="w-full row text-center" style={{ marginTop: " 20px" }}>
          <div className="py-2">
            <span className="text-sm font-medium">
              You own {userNumberOfTokens ? convertYPREDAllocatedTokentoNumber() : "0"}{" "}
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500">
                YPRED
              </span>
            </span>
          </div>
          <div className="w-full flex flex-row justify-center space-x-2">
            <button ref={butButtonRef} onClick={async () => clickTestButton()} className="btn-grad-1 flex ">
              <i className="fi fi-sr-wallet"></i> Buy with Metamask
            </button>

            <button className="btn-grad-1 ">
              <i className="fi fi-sr-interrogation"></i> Need Help
            </button>
          </div>
          {isImgTrackerShown[0] && (
            <>
              <img
                className="hidden"
                src={
                  "https://4111.kewozbho.com/conv-image?tid=&offerid=&amount=" +
                  isImgTrackerShown[1] +
                  "&subid=" +
                  router.query.subid +
                  "&s1=&s2=&s3=&s4=&s5="
                }
                loading="eager"
                alt="img tracking purchase"
              />
              <img
                className="hidden"
                src="https://d.adroll.com/ipixel/LEJIIZ33LNBX3KFS52AJIA/RFC36FDTHBHCXDG4VVPPDW?name=c2dcd5a0"
                width="1"
                height="1"
                alt="pixel img"
              />
            </>
          )}
          {/* <button
            onClick={() => {
              console.log("URL subID : ", router.query.subid);
              console.log("InputState: ", inputState);
            }}
            className="px-8 py-4 bg-red-400"
          >
            TEst
          </button> */}
        </div>
      </div>
    </>
  );
}
