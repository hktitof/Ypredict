import React from "react";

export default function ProgressBar() {
  return (
    <div className="w-full h-12 ">
      <div className="w-full  flex flex-row sm:px-8">
        {/* step 1 */}
        {/* Loader or Check Mark with text */}
        <div className="w-1/3 flex flex-row items-center space-x-2 ">
          <div className="flex flex-row  items-center space-x-1 flex-none">
            <div className="h-6 w-6 rounded-full">
              <div className="flex animate-spin justify-center col-start-2 row-start-2 ">
                {/* Loader */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 feather feather-refresh-cw"
                >
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
              </div>
            </div>
            <span className="">step 1</span>
          </div>
          <div className="w-full h-[3px] rounded-xl bg-gray-300"></div>
        </div>
         {/* step 2 */}
        {/* Loader or Check Mark with text */}
        <div className="w-1/3 flex flex-row items-center space-x-2 ">
        <div className="w-full h-[3px] rounded-xl bg-gray-300"></div>

          <div className="flex flex-row  items-center space-x-1 flex-none">
            <div className="h-6 w-6 rounded-full">
              <div className="flex animate-spin justify-center col-start-2 row-start-2 ">
                {/* Loader */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 feather feather-refresh-cw"
                >
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
              </div>
            </div>
            <span className="">step 2</span>
          </div>
          <div className="w-full h-[3px] rounded-xl bg-gray-300"></div>
        </div>
          {/* step 2 */}
        {/* Loader or Check Mark with text */}
        <div className="w-1/3 flex flex-row items-center space-x-2 ">
        <div className="w-full h-[3px] rounded-xl bg-gray-300"></div>
          <div className="flex flex-row  items-center space-x-1 flex-none">
            <div className="h-6 w-6 rounded-full">
              <div className="flex animate-spin justify-center col-start-2 row-start-2 ">
                {/* Loader */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 feather feather-refresh-cw"
                >
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
              </div>
            </div>
            <span className="">step 2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
