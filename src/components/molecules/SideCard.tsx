import React from "react";
import { useState } from "react";
import CardImage from "../atoms/CardImage";
import Viewer from "react-viewer";

const SideCard = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const images = [
    {
      src: "/uploads/bocchi.jpg",
      alt: "hitori gotou",
      downloadUrl: "https://www.pixiv.net/en/artworks/105063293",
    },
    {
      src: "/uploads/nijika.jpg",
      alt: "ijichi nijika",
      downloadUrl: "https://www.pixiv.net/en/artworks/105063293",
    },
    {
      src: "/uploads/ryo.jpg",
      alt: "yamada ryo",
      downloadUrl: "https://www.pixiv.net/en/artworks/105063293",
    },
    {
      src: "/uploads/kita.jpg",
      alt: "kita ikuyo",
      downloadUrl: "https://www.pixiv.net/en/artworks/105063293",
    },
  ];
  return (
    <div className="md:w-24 w-12">
      <div className="flex flex-col md:gap-8 gap-4 py-4 items-center">
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
    </div>
  );
};

export default SideCard;
