import React from "react";
/* eslint-disable @next/next/no-img-element */
export default function TokenSale() {
  return (
    <div className="token-sale">
      <div className="token-sale-title">Token Sale</div>
      <div className="token-sale-sub-title">
        <span className="sub-title-text">
          yPredict is offering a new and exciting opportunity for retail and institutional investors through their token
          offerings in 3 rounds. Private sale, Presale and Public sale. Private sale is open to everyone through a
          direct contact via email (team@ypredict.ai) or telegram.
        </span>
      </div>

      <div className="token-sale-table-container">
        <div className="token-sale-table">
          <div className="token-sale-table-row table-header">
            <div className="row-image">&nbsp;</div>
            <div className="header-text">Offering Type</div>
            <div className="header-text">Quantity</div>
            <div className="header-text">Price</div>
            <div className="header-text">Raise</div>
            <div className="header-text">Marketcap</div>
            <div className="header-text">
              Minimum
              <br />
              Appreciation %<br />
              at TGE
            </div>
          </div>

          <div className="token-sale-table-row table-row">
            <div className="row-image">
              <img src="img/private-sale-row-image.svg" className="token-sale-row-image" alt="private-sale-row-image.svg"/>
            </div>
            <div className="header-text">Private Sale</div>
            <div className="header-text withbgpad">2m</div>
            <div className="header-text withbgpad">0.036</div>
            <div className="header-text withbgpad">72k</div>
            <div className="header-text withbgpad">-</div>
            <div className="header-text withbgpad">25%</div>
          </div>

          <div className="token-sale-table-row table-row">
            <div className="row-image">
              <img src="img/pre-sale-row-image.svg" className="token-sale-row-image" alt="pre-sale-row-image.svg"/>
            </div>
            <div className="header-text">Pre Sale</div>
            <div className="header-text withbgpad">8m</div>
            <div className="header-text withbgpad">0.037</div>
            <div className="header-text withbgpad">300k</div>
            <div className="header-text withbgpad">-</div>
            <div className="header-text withbgpad">20%</div>
          </div>

          <div className="token-sale-table-row table-row">
            <div className="row-image">
              <img src="img/public-sale-row-image.svg" className="token-sale-row-image" alt="public-sale-row-image.svg"/>
            </div>
            <div className="header-text">Public Sale</div>
            <div className="header-text withbgpad">18m</div>
            <div className="header-text withbgpad">0.038</div>
            <div className="header-text withbgpad">700k</div>
            <div className="header-text withbgpad">-</div>
            <div className="header-text withbgpad">15%</div>
          </div>

          <div className="token-sale-table-row table-footer">
            <div className="row-image" style={{ opacity: "0", width: "0" }}></div>

            <div className="header-text footer-launch" style={{ width: "195px" }}>
              Launch
            </div>
            <div className="header-text withbgpad" style={{ opacity: "0" }}></div>
            <div className="header-text withbgpad">0.045</div>
            <div className="header-text withbgpad" style={{ opacity: " 0" }}></div>
            <div className="header-text withbgpad">4.5m</div>
            <div className="header-text withbgpad" style={{ opacity: " 0" }}></div>
          </div>
        </div>
      </div>

      <div className="token-sale-bg token-sale-left-bg"></div>
      <div className="token-sale-bg token-sale-right-bg"></div>
    </div>
  );
}
