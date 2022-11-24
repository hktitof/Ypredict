import React from "react";
/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
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
          <div className="col-md-6" style={{ marginRight: "-10px" }}>
            <div className="row">
              <div className="col-md-12">
                <video style={{ width: "100%" }} controls>
                  <source src="/ypred_promo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div
              className="under-video-text fw-regular"
              style={{
                color: "grey",
                fontSize: "19px",
                marginTop: "10px",
                marginLeft: "10px",
                fontWeight: "100",
              }}
            >
              <img src="img/layout/quote-shape3.png" style={{ width: "10px" }} alt="" />
              Enabling everyday trader shorlist & trade coins like a <span className="fw-bold text-grad1">
                quant
              </span>. <span className="fw-bold text-grad1">Trading and investment research tools</span> that utilize
              state-of-art data analytics.
            </div>

            <div
              className="row"
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                marginTop: "40px",
                border: "solid 2px  #4845ff",
                borderRadius: "10px",
              }}
            >
              <div className="col-2">
                <img className="" style={{ width: "100%", minWidth: "70px" }} src="/powered.png" alt="" />
              </div>
              <div className="col-5">
                <div className="fw-thin pt-4">
                  <span className="">Powered by</span>{" "}
                  <span className="fw-semibold">
                    <div className="flex flex-row space-x-2 items-center">
                      <img className="w-4 h-4" src="/polygon.png" alt="" />
                      <span> Matic Polygon</span>
                    </div>
                  </span>
                </div>
              </div>
              <div className="col-5">
                <div className="fw-thin text-c-supply" style={{ marginTop: "15px" }}>
                  <img src="/ypred-coin.png" alt="" style={{ width: "30px", marginTop: "0px", marginLeft: "10px" }} />{" "}
                  Supply 100m
                </div>
              </div>
            </div>

            <br />
          </div>
          <div className="col-md-6">
            <div className="card custom-card-buy">
              <div
                className="card-header"
                style={{ background: "radial-gradient(circle at top left, #f03985, #5144f8)" }}
              >
                <ul className="nav nav-tabs card-header-tabs justify-content-center" id="bologna-list" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      style={{ color: "white" }}
                      href="#seed"
                      role="tab"
                      aria-controls="description"
                      aria-selected="true"
                    >
                      {" "}
                      <i className="fi fi-ss-badge-check"></i> Seed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#private"
                      role="tab"
                      aria-controls="history"
                      aria-selected="false"
                    >
                      <i className="fi fi-sr-unlock"></i> Private
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#presale" role="tab" aria-controls="deals" aria-selected="false">
                      <i className="fi fi-sr-lock"></i> Presale
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      style={{ color: "white" }}
                      href="#public"
                      role="tab"
                      aria-controls="deals"
                      aria-selected="false"
                    >
                      <i className="fi fi-sr-lock"></i>
                      Public
                    </a>
                  </li>
                </ul>
              </div>
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
                    <div
                      className="row align-items-center mt-5 flex justify-center items-center p-3"
                      style={{ backgroundColor: "#cdfada" }}
                    >
                      <div className="col-md-12 ">
                        <div className="text-center align-middle text-darkgreen" style={{ fontSize: " 13px" }}>
                          You&apos;re allowlisted for private sale <span></span>
                        </div>
                      </div>
                    </div>
                    {/* Working Section for Private Sale to Wallet...etc */}
                    <div className="relative">
                      {/* Connect Wallet Section */}
                      <div className="absolute w-full h-full bg-white opacity-70 flex justify-center items-center">
                          <span className="">Hello</span>
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
                          <input
                            type="number"
                            className="input-buy text-center"
                            placeholder="please input amount of USDT"
                          />
                        </div>
                        <div className="col-4 text-start ">
                          <div className="flex flex-row space-x-2 items-center fw-semibold">
                            =
                            <img
                              src="/ypred-coin.png"
                              alt=""
                              style={{ width: " 30px", marginTop: " 0px", marginLeft: " 10px" }}
                            />
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

                    <div className="row align-items-center" style={{ backgroundColor: " #fcfcfc ", marginTop: "30px" }}>
                      <div className="col-md-12 pt-4">
                        <h5 className="text-center text-grad1">Sale ending in </h5>
                      </div>
                      <div className="col-md-12 text-center" style={{ marginBottom: " 20px" }}>
                        <span className="fw-semibold text-grad1" style={{ fontSize: " 40px" }} id="clock"></span>
                      </div>
                    </div>
                  </div>

                  {/* //** ! Starting PreSale */}
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
