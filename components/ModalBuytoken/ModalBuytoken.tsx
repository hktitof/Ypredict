import React from "react";
import ProgressBar from "./ProgressBar";
import { useRef, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Step_1_initial_Error = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
      <span className="text-xl">Step 1 : Failed Approving USDT transaction</span>
      <span className="text-center">
        Oops.. Failed to approve the transaction
        <br /> close the window and try again
      </span>
    </div>
  );
};
const Step_2_initial_Error = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
      <span className="text-xl">Step 2 : Failed Buying YPRED Token transaction</span>
      <span className="text-center">
        Oops.. Failed to approve the transaction
        <br /> close the window and try again
      </span>
    </div>
  );
};
const Step_1_initial_waiting_transaction_Mining = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
      <span className="text-xl">Step 1 : Waiting for transaction Receipt</span>
      <span className="text-center">Please wait a moment for transaction to be mined...</span>
    </div>
  );
};
const Step_2_initial_waiting_transaction_Mining = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
      <span className="text-xl">Step 2 : Waiting for transaction Receipt</span>
      <span className="text-center">Please wait a moment for transaction to be mined...</span>
    </div>
  );
};

const Step_3_success = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
      <span className="text-xl">Step 3 : Transaction Confirmed</span>
      <span className="text-center">You have been successfully YPRED Token</span>
    </div>
  );
};

export default function ModalBuytoken(props: { stepsStatus; setStepsStatus; showBuyTokenModal; setShowBuyTokenModal }) {
  //   const [showModal, setShowModal] = React.useState(false);

  const Step_1_initial_waiting_approve = () => {
    const secondsRef = useRef<HTMLSpanElement>(null);
    const seconds = useRef<number>(30);
    // const timerInterval = useRef(null);
    useEffect(() => {
      const timerInterval = setInterval(() => {
        console.log("Interval seconds timer for step 1");
        // if status is still waiting_approve, this will help when user already accepted the transaction
        // but timer still running so it will close itself, when it is not waiting_approve
        if (props.stepsStatus.step_1.status === "waiting_approve") {
          if (seconds.current > 0) {
            seconds.current--;
            secondsRef.current!.innerHTML = seconds.current.toString();
          } else {
            props.stepsStatus.step_1.status = "error";
            props.setStepsStatus({ ...props.stepsStatus });
            clearInterval(timerInterval);
          }
        } else {
          clearInterval(timerInterval);
        }
      }, 1000);
      return () => clearInterval(timerInterval);
    }, []);

    return (
      <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
        <span className="text-center text-lg sm:text-xl">Step 1 : Approving USDT transaction</span>
        <span className="text-center">Please Approve the transaction in your wallet</span>
        <span className="">
          Waiting...<span ref={secondsRef}>{seconds.current}</span> sec
        </span>
        <span className="">
          <span className="text-red-400">Note : </span>Closing this window will terminate the request
        </span>
      </div>
    );
  };

  const Step_2_initial_waiting_approve = () => {
    const secondsRef = useRef<HTMLSpanElement>(null);
    const seconds = useRef<number>(30);
    // const timerInterval = useRef(null);
    useEffect(() => {
      const timerInterval = setInterval(() => {
        console.log("Interval seconds timer for step 2");
        // if status is still waiting_approve, this will help when user already accepted the transaction
        // but timer still running so it will close itself, when it is not waiting_approve
        if (props.stepsStatus.step_2.status === "waiting_approve") {
          if (seconds.current > 0) {
            seconds.current--;
            secondsRef.current!.innerHTML = seconds.current.toString();
          } else {
            props.stepsStatus.step_2.status = "error";
            props.setStepsStatus({ ...props.stepsStatus });
            clearInterval(timerInterval);
          }
        } else {
          clearInterval(timerInterval);
        }
      }, 1000);
      return () => clearInterval(timerInterval);
    }, []);

    return (
      <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
        <span className="text-center text-lg sm:text-xl">
          Step 2 : Buying YPRED - Waiting approving the transaction.
        </span>
        <span className="text-center">Please Approve the transaction in your wallet.</span>
        <span className="">
          Waiting...<span ref={secondsRef}>{seconds.current}</span> sec
        </span>
        <span className="">
          <span className="text-red-400">Note : </span>Closing this window will terminate the request
        </span>
      </div>
    );
  };
  const GetStepMessage = ({ stepsStatus_arg }) => {
    if (!(stepsStatus_arg.step_1.status === "blocked")) {
      if (stepsStatus_arg.step_1.status === "waiting_approve") return <Step_1_initial_waiting_approve />;
      if (stepsStatus_arg.step_1.status === "waiting_transaction_Mining")
        return <Step_1_initial_waiting_transaction_Mining />;
      if (stepsStatus_arg.step_1.status === "error") return <Step_1_initial_Error />;

      // if compiler goes to here it means step 1 is done
      if (stepsStatus_arg.step_1.status === "success") {
        // ** TODO : next thing you'll do is working on step 2, by make it waiting_approve
        if (stepsStatus_arg.step_2.status === "waiting_approve") return <Step_2_initial_waiting_approve />;
        if (stepsStatus_arg.step_2.status === "error") return <Step_2_initial_Error />;
        if (stepsStatus_arg.step_2.status === "waiting_transaction_Mining") return <Step_2_initial_waiting_transaction_Mining/>
        if(stepsStatus_arg.step_2.status === "success") return <Step_3_success/>
      }
    }
  };
  console.log("props.stepsStatus.step_1.status : ", props.stepsStatus.step_1.status);

  return (
    <>
      {props.showBuyTokenModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3 sm:px-0">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5 py-3 border-b border-solid border-slate-200 rounded-t">
                  <div className="hero-title">
                    <span className="empower ">YPRED</span>, Buy Tokens Process.
                  </div>

                  <svg
                    onClick={() => props.setShowBuyTokenModal(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-red-500 hover:cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/*body*/}
                <div className="relative p-6 flex flex-col">
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum pariatur expedita dolorem
                    assumenda sunt dignissimos eveniet rem voluptatem vero sint, libero natus ab nulla nesciunt,
                    repellendus quasi laborum dolorum tempore.
                  </p> */}
                  <ProgressBar stepsStatus={props.stepsStatus} />
                  {/* Step Message */}
                  <GetStepMessage stepsStatus_arg={props.stepsStatus} />

                  {/* <Step_1_initial_waiting_approve /> */}
                  {/* <Step_1_initial_Error/> */}
                  {/* <Step_1_initial_waiting_transaction_Mining /> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      props.setStepsStatus({
                        step_1: { status: "blocked" },
                        step_2: { status: "blocked" },
                        step_3: { status: "blocked" },
                      });
                      props.setShowBuyTokenModal(false);
                    }}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
