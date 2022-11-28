import React from "react";
import { Step_1, Step_2, Step_3 } from "./StepsComponents";

export default function ProgressBar(props:{stepsStatus}) {
  return (
    <div className="w-full h-12 ">
      <div className="w-full  flex flex-row sm:px-8">
        {/* step 1 */}
        {/* Loader or Check Mark with text */}
        <div className="w-1/3 flex flex-row items-center space-x-2 ">
          <Step_1 status={props.stepsStatus.step_1.status}/>
        </div>
        {/* step 2 */}
        {/* Loader or Check Mark with text */}
        <div className="w-1/3 flex flex-row items-center space-x-2 ">
          <Step_2 status={props.stepsStatus.step_2.status}/>
        </div>
        {/* step 2 */}
        {/* Loader or Check Mark with text */}
        <div className="w-1/3 flex flex-row items-center space-x-2 ">
          <Step_3 status={props.stepsStatus.step_3.status}/>
        </div>
      </div>
    </div>
  );
}
