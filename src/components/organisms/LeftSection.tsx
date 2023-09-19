import React, { useState } from "react";
import NameCard from "../molecules/NameCard";
import ImageCard from "../molecules/ImageCard";
import ShopCard from "../molecules/ShopCard";

const LeftSection = () => {
  const coba = () => {};

  return (
    <div className="absolute md:top-[30vh] top-[35vh] 2xl:left-[30vw] md:left-[20vw] left-2 flex flex-col md:gap-16 gap-10 z-40">
      <NameCard />
      <div className="flex flex-col md:gap-10 gap-8 items-center relative md:right-14 right-6 ">
        <ImageCard />
        <ShopCard />
      </div>
    </div>
  );
};

export default LeftSection;
