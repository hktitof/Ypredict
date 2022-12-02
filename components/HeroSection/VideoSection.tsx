import React from "react";
/* eslint-disable @next/next/no-img-element */
export default function VideoSection() {
  return (
    <div className="col-md-6" style={{ marginRight: "-10px" }}>
      <div className="row">
        <div className="col-md-12">
          <video style={{ width: "100%" }} controls>
            <source src="img/ypred_promo.mp4" type="video/mp4" />
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
        Enabling everyday trader shorlist & trade coins like a <span className="fw-bold text-grad1">quant</span>.{" "}
        <span className="fw-bold text-grad1">Trading and investment research tools</span> that utilize state-of-art data
        analytics.
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
            <img src="/ypred-coin.png" alt="" style={{ width: "30px", marginTop: "0px", marginLeft: "10px" }} /> Supply
            100m
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}
