import React from 'react'

export default function PreSale() {
  return (
     <div className="tab-pane" id="presale" role="tabpanel" aria-labelledby="deals-tab">
     <div className="row">
       <div className="col-sm-3 col-md-4">
         <div className="col-sm-3 col-md-4">
           <div className="dropdown">
             <button
               className="btn dropdown-toggle "
               style={{ border: " 0", backgroundColor: "white" }}
               type="button"
               data-bs-toggle="dropdown"
               aria-expanded="false"
             >
               <img src="/polygon.png" alt="" style={{ width: " 30px" }} />
             </button>

             <ul className="dropdown-menu " style={{ width: " 10px", fontSize: "10px" }}>
               <li>
                 <img
                   src="/polygon.png"
                   alt=""
                   style={{ width: " 30px", marginLeft: " 10px", marginRight: "10px" }}
                 />
                 Matic USDT
               </li>
               {/* <li>
                                                 <hr className="dropdown-divider">
                                             </li> */}
               <li>
                 <img
                   src="/bsc.png"
                   alt=""
                   style={{ width: " 30px", marginLeft: " 10px", marginRight: "10px" }}
                 />
                 Binance USDT
               </li>
               {/* <li>
                                                 <hr className="dropdown-divider">
                                             </li> */}
               <li>
                 <img
                   src="/eth.png"
                   alt=""
                   style={{ width: " 30px", marginLeft: " 10px", marginRight: "10px" }}
                 />
                 Ethereum USDT
               </li>
             </ul>
           </div>
         </div>
       </div>
       <div className="col-sm-6 col-md-4">
         <h1 className="card-text text-center text-dark2">Invest</h1>
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
           Progress Bar for PreSale here
           {/* <div
             className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
             role="progressbar"
             style={{ width: " 75%" }}
             aria-valuenow="25"
             aria-valuemin="0"
             aria-valuemax="100"
           ></div> */}
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
             <p className="text-dark2 text-box-sub-title">Presale Sale Price</p>
             <p className="text-box-content"> $0.037</p>
           </div>
           <div className="col-sm-6 text-center">
             <p className="text-dark2 text-box-sub-title "> Presale Sale Goal</p>
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
         <div className="row text-center" style={{ marginTop: " 20px" }}>
           <div className="col-sm-8">
             <input
               type="number"
               className="input-buy text-center"
               placeholder="please input amount of USDT"
             />
           </div>
           <div className="col-sm-4 text-start">
             <div className=" fw-semibold">
               =
               <img
                 src="./img/icon/ypred-coin.png"
                 alt=""
                 style={{ width: " 30px", marginTop: " 0px", marginLeft: " 10px" }}
               />
               <span id="ypred-amount">0</span>
             </div>
           </div>
         </div>
         <div className="row text-center" style={{ marginTop: " 20px" }}>
           <div className="col-md-12">
             <button className="btn-grad-1">
               <i className="fi fi-sr-wallet"></i>
               Connect Wallet
             </button>
             <button className="btn-grad-1">
               <i className="fi fi-sr-interrogation"></i> Need Help
             </button>
           </div>
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
  )
}
