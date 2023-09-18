import React, { useState } from "react";
import Image from "next/image";
import Viewer from "react-viewer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ImagePost = () => {
  //
  const [visible, setVisible] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  //
  const images = [
    {
      src: "/uploads/ikuyo2.jpg",
      alt: "kita ikuyo",
      downloadUrl: "https://www.pixiv.net/en/artworks/105063293",
    },
    {
      src: "/uploads/ikuyo1.jpg",
      alt: "kita ikuyo",
      downloadUrl: "https://www.pixiv.net/en/artworks/104270172",
    },
  ];

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        navigation={true}
        className="mySwiper xl:w-[520px] lg:w-[450px] md:w-[320px] sm:w-[300px] w-60 md:h-[420px] h-[340px]"
      >
        {images.map(({ alt, src }, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                // onDoubleClick={() => }
                onClick={() => {
                  setActiveIdx(i);
                  setVisible(true);
                }}
                className="object-cover w-full h-full cursor-pointer"
                alt={alt}
                src={src}
                width={500}
                height={500}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
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
    </>
  );
};

export default ImagePost;
