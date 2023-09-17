import React, { useState } from "react";
import CardImage from "../atoms/CardImage";
import Viewer from "react-viewer";

const ImageCard = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const images = [
    {
      src: "/uploads/kita5.jpeg",
      alt: "kita ikuyo",
      downloadUrl: "",
    },
    {
      src: "/uploads/kita5.jpeg",
      alt: "kita ikuyo",
      downloadUrl: "",
    },
    {
      src: "/uploads/kita5.jpeg",
      alt: "kita ikuyo",
      downloadUrl: "",
    },
    {
      src: "/uploads/kita5.jpeg",
      alt: "kita ikuyo",
      downloadUrl: "",
    },
  ];
  return (
    <div
      className={`flex flex-wrap gap-3 md:w-44 w-20 items-center justify-center`}
    >
      {images.map(({ alt, src }, i) => {
        return (
          <CardImage
            key={i}
            alt={alt}
            src={src}
            activeIdx={() => setActiveIdx(i)}
            visible={() => setVisible((v) => !v)}
          />
        );
      })}
      <Viewer
        visible={visible}
        onClose={() => setVisible(false)}
        images={images}
        zIndex={2000}
        activeIndex={activeIdx}
        downloadable
        downloadInNewWindow
        onMaskClick={() => setVisible(false)}
        onChange={(_, idx) => setActiveIdx(idx)}
        zoomSpeed={0.15}
      />
    </div>
  );
};

export default ImageCard;
