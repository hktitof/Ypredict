import React from "react";
/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-row-1">
        <div className="footer-col-1">
          <div className="footer-logo">
            <img src="/footer-logo.svg" className="footer-logo-img" alt="Footer Logo" />
            yPredict
          </div>
          <div className="footer-notes">
            Cutting-edge crypto research & trading platform that provides traders and investors access to dozens of
            AI-powered crypto analysis tools.
          </div>
        </div>
        <div className="footer-col-2 footer-col-links">
          <span className="footer-link-title">Platform</span>
          <a href="" className="footer-link-anchor">
            Home
          </a>
          <a href="" className="footer-link-anchor">
            App Beta Access
          </a>
          <a href="https://ypredict.ai/token" className="footer-link-anchor">
            Token
          </a>
          <a href="https://ypredict.ai/app" className="footer-link-anchor">
            Dapp
          </a>
        </div>
        <div className="footer-col-3 footer-col-links">
          <span className="footer-link-title">Social</span>
          <a href="" className="footer-link-anchor">
            Twitter
          </a>
          <a href="https://t.me/ypredict" className="footer-link-anchor">
            Telegram
          </a>
          <a href="" className="footer-link-anchor">
            Youtube
          </a>
        </div>
        <div className="footer-col-4 footer-col-links">
          <span className="footer-link-title">Help</span>
          <a href="mailto:team@ypredict.ai" className="footer-link-anchor">
            Email
          </a>
          <a href="#faq" className="footer-link-anchor">
            FAQ
          </a>
          <a href="" className="footer-link-anchor">
            Education
          </a>
        </div>
      </div>
      <div className="footer-row-2">
        <span className="copyright-text">
          © All right reserved by <span className="find-scan-text">yPredict.ai</span>
        </span>
      </div>
    </div>
  );
}
