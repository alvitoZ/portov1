import React from "react";
import Image from "next/image";

type color = {
  color: string;
};

const ShopCard = () => {
  return (
    <div className="shadowContent md:w-36 w-16 bg-white">
      <div className="flex flex-col justify-center items-center md:text-sm text-[8px] font-custom font-bold md:gap-2 gap-[2px] pt-2 md:pb-5 pb-1">
        <p className="">Guitar</p>
        <Image
          className="rounded-[50%] md:w-10 w-7 md:h-10 h-7 hover:scale-150 hover:rounded-none object-cover"
          src={"/uploads/ikuyo4.jpg"}
          alt=""
          width={40}
          height={40}
        />
        <del>Rp 2.959.000</del>
        <p className="">Rp 1.959.000</p>
      </div>
    </div>
  );
};

export default ShopCard;
