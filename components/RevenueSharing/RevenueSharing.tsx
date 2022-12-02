import React from "react";
/* eslint-disable @next/next/no-img-element */
export default function REvenueSharing() {
  return (
    <div className="revenue-sharing">
      <div className="revenue-sharing-info">
        <div className="revenue-sharing-title">
          <span className="revenue-share-text">10% Revenue Share</span>
          <br />
          through staking
        </div>
        <div className="revenue-share-sub-title">
          10% of the subscription revenue will be shared with YPERD holders through income sharing staking pool.
          Platform generates revenue through sale of subscriptions from its marketplace. AI Signals are offered through
          models listed on marketplace.
        </div>
      </div>

      <div className="revnue-share-image">
        <img src="img/revenue-share-image.svg" className="img-revenue-share" alt="revenue-share-image.svg" />
      </div>
    </div>
  );
}
