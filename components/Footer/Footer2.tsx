import React from "react";
import { Link } from "react-scroll";
/* eslint-disable @next/next/no-img-element */
export default function Footer2() {
  return (
    <div className="w-full bg-footerBackground flex flex-col space-y-12 pt-16 pb-8 px-8 sm:px-12 md:px-16 lg:px-28 xl:px-44">
      <div className="w-full md:flex md:flex-row md:justify-between lg:text-xl  grid grid-cols-2 sm:gap-x-8 gap-y-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-2 md:space-x-6 items-center">
            <img src="/footer-logo.svg" className="md:h-20 h-12" alt="Footer Logo" />
            <span className="text-white text-xl md:text-4xl">yPredict</span>
          </div>
          <div className="flex flex-col space-y-8 text-gray-400 w-full">
            <p className="w-full md:w-96 text-xs md:text-xl">
              Cutting-edge crypto research & trading platform that provides traders and investors access to dozens of
              AI-powered crypto analysis tools.
            </p>
          </div>
        </div>
        <div className="pl-8 md:pl-0">
          <div className="flex flex-col  text-sm md:text-lg">
            <span className="mb-4 text-white">Platform</span>
            <div className="flex flex-col text-gray-400 space-y-2">
              <Link to="HeroSection" spy={true} smooth={true} offset={-150} duration={2000}>
                <span className="hover:cursor-pointer hover:underline">Home</span>
              </Link>
              <span className="">App Beta Access</span>
              <span className="">Token</span>
              <span className="">Dapp</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-sm md:text-lg">
          <span className="mb-4 text-white">Social</span>
          <div className="flex flex-col text-gray-400 space-y-2">
            <span
              onClick={() => window.open("https://twitter.com/ypredict_ai", "_blank")}
              className="hover:cursor-pointer hover:underline"
            >
              Twitter
            </span>
            <span
              onClick={() => window.open("https://t.me/ypredict", "_blank")}
              className="bg-blue hover:cursor-pointer hover:underline"
            >
              Telegram
            </span>
            <span
              onClick={() => window.open("https://www.youtube.com/channel/UCt2WjHoVuXHi_mhTYzlrsvw", "_blank")}
              className="hover:cursor-pointer hover:underline"
            >
              Youtube
            </span>
          </div>
        </div>
        <div className="pl-8 md:pl-0 text-sm md:text-lg">
          <div className="flex flex-col">
            <span className="mb-4 text-white">Help</span>
            <div className="flex flex-col text-gray-400 space-y-2">
              <span className="bg-blue">Email</span>
              <Link to="faq" spy={true} smooth={true} offset={-150} duration={500}>
                <span className="hover:cursor-pointer hover:underline">FAQ</span>
              </Link>
              <span className="">Education</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-xs md:text-base">
        <span className="text-gray-400">
          © All right reserved by <span className="find-scan-text">yPredict.ai</span>
        </span>
      </div>
    </div>
  );
}
