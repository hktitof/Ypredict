import React, { useEffect } from "react";
/* eslint-disable @next/next/no-img-element */
export default function VideoSection() {
  const [isGifShown, setIsGifShown] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  useEffect(()=>{
    if(videoRef.current){
      videoRef.current.addEventListener('play',()=>{
        setIsGifShown(false)
      })
      videoRef.current.addEventListener('pause',()=>{
        setIsGifShown(true)
      })
    }
  },[])
  return (
    <div className="col-md-6" style={{ marginRight: "-10px" }}>
      <div className="row">
        <div className=" col-md-12 relative">
          <div className="relative">
            {/* <div className="absolute z-10 w-full h-full ">
              <div className="token-info-image footer-info-image desktop">
                <div className="token-info-image-div">
                  <img src="img/play-solid.svg" className="video-play-footer-image" alt="promo_video.gif" />
                </div>
                <img src="img/promo_video.gif" className="img-token-info" alt="promo_video.gif" />
              </div>
            </div> */}
            {isGifShown && (
              <div
                onClick={() => {
                  setIsGifShown(false);
                  videoRef.current.play();
                }}
                className="absolute  w-full h-full hover:cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <div className="absolute z-10 w-full h-full flex justify-center items-center bg-white opacity-20"></div>
                  <div className="absolute z-10 w-full h-full flex justify-center items-center ">
                    <img src="img/play-solid.svg" className="w-32 h-12 opacity-100 z-20" alt="promo_video.gif" />
                  </div>
                  <img src="img/promo_video.gif" className="img-token-info" alt="promo_video.gif" />
                </div>
              </div>
            )}

            <video
              onClick={() => {
                if (videoRef.current.played) {
                  setIsGifShown(true);
                  videoRef.current.pause();
                }
              }}
              ref={videoRef}
              className={`w-full ${isGifShown ? "hidden" : ""}}`}
              controls={isGifShown?false:true}
            >
              <source src="img/ypred_promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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
        {/* <img src="img/layout/quote-shape3.png" style={{ width: "10px" }} alt="" /> */}
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
