import React from "react";

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
    <div className="interested-in-investing-section" id="investing-bottom">
      <div className="row">
        <div className="col-md-4 text-end">
          <div className="token-info-image footer-info-image desktop">
            <div className="token-info-image-div">
              <img src="img/play-solid.svg" className="video-play-footer-image" />
            </div>

            <img src="img/promo_video.gif" className="img-token-info" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="interested-text">
            <span className="interested-text-span text-xl">
              Interested Investing in
            </span>
            <span className="interest-ypredict">yPredict?</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footer-info-video-and-cta">
            <div className="token-info-image footer-info-image mobile">
              <div className="token-info-image-div">
                <img src="img/play-solid.svg" className="video-play-footer-image" />
              </div>

              <img src="img/promo_video.gif" className="img-token-info" />
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

                <img src="img/interest-ypredict-img.svg" className="interested-img inquire-interested-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
