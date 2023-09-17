import React, { ChangeEventHandler } from "react";
import { useState } from "react";

type Props = {
  action?: () => void;
};

const ButtonToggle: React.FC<Props> = ({ action }) => {
  const coba = () => {
    if (className === "ml-0") {
      setClassName("ml-20");
    } else {
      setClassName("ml-0");
    }
  };

  const clearFix = () => {};

  //   const coba = () => {
  //     console.log("s");
  //     if (className === "justify-start") {
  //       setClassName("justify-end");
  //     } else {
  //       setClassName("justify-start");
  //     }
  //   };

  const [className, setClassName] = useState<string>("ml-0");

  return (
    <div>
      <div
        className={`h-[1px] border-opacity-30 border-b-4 border-sky-500 w-28 pb-3`}
        // onClick={() => props.headlinesClicked(); props.getData()}
      >
        <div
          className={`h-6 border-4 border-sky-600 w-12 bg-blue-600 absolute duration-500 ${className}`}
          onClick={() => {
            coba();
            action ? action!() : clearFix();
          }}
        ></div>
      </div>
    </div>
  );
};

export default ButtonToggle;
