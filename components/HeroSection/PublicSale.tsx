import React from "react";
/* eslint-disable @next/next/no-img-element */
export default function PublicSale() {
  return (
    <div className="" id="public" role="tabpanel" aria-labelledby="deals-tab">
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
              <li className="flex items-center hover:cursor-pointer">
                <img src="/bsc.png" alt="" style={{ width: "30px", marginLeft: "10px", marginRight: " 10px" }} />
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
        <div className="col-sm-3 col-md-4 text-end pr-10 pt-4">
          <p className="text-light2 fw-semibold">
            CLOSE <span className="blink_me_red"></span>{" "}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <span className="private-on text-primary">$104,000</span>/
          <span className="private-total text-primary fw-semibold">$300,000</span>
          <div className="progress">
          <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
              role="progressbar"
              style={{ width: "77%" }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>
      </div>
      <div className="row align-items-center" style={{ backgroundColor: " #fafafa " }}>
        <div className="col-md-12 pt-4">
          <p className="text-center align-middle text-darkgreen" style={{ fontSize: "13px" }}>
            Join telegram group for the updates
          </p>
        </div>
      </div>
      <div className="wrapper">
        <div className="overlay_lock form-presale">
          <div className="row" style={{ marginTop: " 20px" }}>
            <div className="col-sm-6 text-center">
              <p className="text-dark2 text-box-sub-title">Public Sale Price</p>
              <p className="text-box-content"> $0.037</p>
            </div>
            <div className="col-sm-6 text-center">
              <p className="text-dark2 text-box-sub-title "> Public Sale Goal</p>
              <p className="text-box-content"> $300,000</p>
            </div>
          </div>
          <div className="row" style={{ marginTop: " 20px" }}>
            <div className="col-sm-6 text-center">
              <p className="text-dark2 text-box-sub-title"> Listing Price</p>
              <p className="text-box-content">$0.045</p>
            </div>
            <div className="col-sm-6 text-center">
              <p className="text-dark2 text-box-sub-title">ROI at Listing</p>
              <p className="text-box-content">20%</p>
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
                // ref={inputRef}
                // onChange={handleInputChange}
                // defaultValue={0}
                type="number"
                className="border-b-[1px] border-black outline-0 w-48 h-10 text-center font-semibold placeholder-gray-500"
                placeholder="please input amount of USDT"
              />
              {/* {showMinimumMessage ? (
                <span className="text-xs">
                  Minimum is {parseFloat(minAmountToInvest) < 1 ? "1" : minAmountToInvest}
                </span>
              ) : (
                <></>
              )} */}
            </div>
          </div>

          <div className="flex flex-row space-x-2 items-center fw-semibold">
            =
            <img src="/ypred-coin.png" alt="" style={{ width: " 30px", marginLeft: " 10px" }} />
            <span id="ypred-amount">0</span>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center space-x-2">
            <button
            //  onClick={async () => clickTestButton()}
             className="btn-grad-1 flex ">
              <i className="fi fi-sr-wallet"></i> Buy with Metamask
            </button>

            <button className="btn-grad-1 ">
              <i className="fi fi-sr-interrogation"></i> Need Help
            </button>
          </div>
        </div>
      </div>
      <div className="absolute overlay-icon " style={{ zIndex: " 6", top: "40%", left: " 40%" }}>
        <div className="text-grad1" style={{ fontSize: " 100px" }}>
          <i className="fi fi-rr-lock"></i>
        </div>
      </div>
      <div className="row align-items-center mr-8" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="col-md-12 pt-4">
          <h5 className="text-center text-grad1">Sale starting in</h5>
        </div>
        <div className="col-md-12 text-center" style={{ marginBottom: " 20px" }}>
          <span className="fw-semibold text-grad1" style={{ fontSize: " 40px" }} id="clock2">
            00:00:00
          </span>
        </div>
      </div>
    </div>
  );
}
