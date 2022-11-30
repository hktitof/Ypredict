import React from "react";
import BuySection from "./BuySection";
import CardHeader from "./CardHeader";
import PreSale from "./PreSale";
import VideoSection from "./VideoSection";
/* eslint-disable @next/next/no-img-element */
export default function HeroSection(props: {
  showModal;
  setShowModal;
  showBuyTokenModal;
  setShowBuyTokenModal;
  stepsStatus;
  setStepsStatus;
}) {
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
          <VideoSection/>
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
                          {/* <div
                            className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div> */}
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
