import React from "react";
/* eslint-disable @next/next/no-img-element */
export default function Header() {
  if (typeof window !== "undefined") {
    $(document).ready(function () {
      $(".hamberguer-menu-anchor").click(function () {
        if ($(".nav-header").hasClass("visible")) {
          $(".nav-header").removeClass("visible");
        } else {
          $(".nav-header").addClass("visible");
        }
      });
    });
  }

  return (
    <div className="header bg-white">
      <div className="logo-header">
        <img src="/logo.svg" className="header-logo" alt="logo header"/>
      </div>
      <div className="nav-header">
        <a href="../"  className="relative nav-header-links hover:cursor-pointer">
          <span className="">Home</span>
          {/* <div className="w-full h-[2px] rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div> */}
        </a>
        <a href="https://s.surveyplanet.com/h7p13rld" target={"_blank"} rel="noreferrer" className="relative nav-header-links hover:cursor-pointer">
          <span className="">App</span>
          {/* <div className="w-full h-[2px] rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div> */}
        </a>
        <a className="relative nav-header-links hover:cursor-pointer">
          <span className="">Token</span>
          <div className="w-full h-[2px] rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
        </a>
        <a href="https://t.me/ypredict"  target={"_blank"} rel="noreferrer" className="relative nav-header-links hover:cursor-pointer">
          <span className="">Community</span>
          {/* <div className="w-full h-[2px] rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div> */}
        </a>

        <a href="https://s.surveyplanet.com/h7p13rld"  target={"_blank"} rel="noreferrer" className="nav-header-button nav-header-button-signin">
          Beta Access
        </a>
        <a href="https://forms.gle/hvof387wZ9HscD6h7"  target={"_blank"} rel="noreferrer" className="nav-header-button nav-header-button-register">
          Private Sale
        </a>
      </div>

      <div className="hamberguer-menu-section">
        <div  className="hamberguer-menu-anchor hover:cursor-pointer">
          <img src="img/bars-solid.svg" className="mobile-hamberuger" alt="barssolid.svg" />
        </div>
      </div>
    </div>
  );
}
