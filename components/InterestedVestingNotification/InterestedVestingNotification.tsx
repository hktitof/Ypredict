import React from "react";
/* eslint-disable @next/next/no-img-element */
export default function InterestedVestingNotification() {
  if (typeof window !== "undefined") {
    $(window).on("scroll", function () {
      var y = $(this).scrollTop();
      if (y > 800) {
        $("#investing-bottom").fadeIn();
      } else {
        $("#investing-bottom").fadeOut();
      }
    });
  }

  return (
    <div className="interested-in-investing-section " id="investing-bottom">
      {/* Added by titof from here */}
      <div className="w-full h-full flex justify-center md:justify-between items-center px-4">
        <div className="hidden md:block z-10 w-32 hover:cursor-pointer">
          <div className="relative w-full h-full">
            <div className="absolute z-10 w-full h-full flex justify-center items-center bg-white opacity-20"></div>
            <div className="absolute z-10 w-full h-full flex justify-center items-center ">
              <img src="img/play-solid.svg" className="w-4 h-4 opacity-100 z-20" alt="promo_video.gif" />
            </div>
            <img src="img/promo_video.gif" className="img-token-info" alt="promo_video.gif" />
          </div>
        </div>
        <span className=" block md:hidden md:text-xl text-white ">Interested Investing in in YPredict?</span>

        <div className="flex flex-row md:space-x-8 items-center">
          <div className="hidden md:block text-xl text-white ">Interested Investing in in YPredict?</div>
          <button className="bg-white flex-none md:flex  flex-col justify-center items-center px-8 sm:px-12 py-1 sm:py-2 rounded-xl">
            <div className="font-semibold lg:text-2xl text-blue-700">Apply Now!</div>
            <div className="flex flex-row space-x-1 items-center">
              <div className="w-[12px] h-[12px] rounded-full bg-green-600"></div>
              <span className="text-xs">Private Sale</span>
            </div>
          </button>
        </div>
      </div>

      {/* Added by titof to here */}

      {/* <div className="row">
        <div className="col-md-4 text-end">
          <div className="token-info-image footer-info-image desktop">
            <div className="token-info-image-div">
              <img src="img/play-solid.svg" className="video-play-footer-image" alt="promo_video.gif" />
            </div>

            <img src="img/promo_video.gif" className="img-token-info" alt="promo_video.gif" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="interested-text">
            <span className="interested-text-span text-xl">Interested Investing in</span>
            <span className="interest-ypredict">yPredict?</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footer-info-video-and-cta">
            <div className="token-info-image footer-info-image mobile">
              <div className="token-info-image-div">
                <img src="img/play-solid.svg" className="video-play-footer-image" alt="promo_video.gif" />
              </div>

              <img src="img/promo_video.gif" className="img-token-info" alt="promo_video.gif" />
            </div>

            <div className="interested-token-sale-details">
              <div className="token-sale-details">
                <div className="sale-inquire-div">
                  <a href="https://forms.gle/UWbAcqe2AyorWeAM9" className="inquire-now-anchor">
                    Apply Now!
                  </a>
                  <span className="sale-is-on">
                    <div className="live"></div> Private Sale
                  </span>
                </div>

                <img
                  src="img/interest-ypredict-img.svg"
                  className="interested-img inquire-interested-image"
                  alt="promo_video.gif"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
