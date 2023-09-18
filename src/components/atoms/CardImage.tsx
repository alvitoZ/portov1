import React from "react";
import Image from "next/image";

type image = {
  src: string;
  alt: string;
  activeIdx: () => void;
  visible: () => void;
};

const CardImage = ({ src, alt, activeIdx, visible }: image) => {
  return (
    <div className={`bg-blue-100`}>
      <Image
        onClick={() => {
          activeIdx();
          visible();
        }}
        className="md:p-1 p-[2px] md:w-[65px] w-[30px] md:h-[60px] h-[30px] hover:scale-125 object-cover cursor-pointer"
        src={src}
        alt={alt}
        width={70}
        height={70}
      />
    </div>
  );
};

export default CardImage;
