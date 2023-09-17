import React from "react";

const NameCard = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <div
        className={`font-custom bg-[#f1ff54] w-fit md:text-lg text-xs font-normal hover:rotate-3 hover:skew-x-6 hover:bg-[hsl(0,100%,63%)] text-white`}
      >
        <p className="text-center md:w-44 w-24 md:px-5 px-0 md:py-1 py-0">
          Kita-chan
        </p>
      </div>
      <div
        className={`font-custom bg-[#41f2ff] w-fit md:text-lg text-xs font-normal hover:rotate-3 hover:skew-x-6 hover:bg-[hsl(0,100%,63%)] text-white`}
      >
        <p className="text-center md:w-44 w-24 md:px-5 px-0 md:py-1 py-0">
          Kessoku Band
        </p>
      </div>
    </div>
  );
};

export default NameCard;
