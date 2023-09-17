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
    <div className={`bg-blue-50`}>
      <Image
        onClick={() => {
          activeIdx();
          visible();
        }}
        className="md:p-1 p-[2px] object-fill md:w-[65px] w-[30px] md:h-[60px] h-[30px] hover:scale-150"
        src={src}
        alt={alt}
        width={70}
        height={70}
      />
    </div>
  );
};

export default CardImage;
