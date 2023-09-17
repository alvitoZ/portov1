import React, { useState } from "react";
import Image from "next/image";
import SvgFooter from "../atoms/SvgFooter";
import Viewer from "react-viewer";
import { trim } from "@/utils/trim";

const PostImage = () => {
  //
  const [visible, setVisible] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  //
  const [likes, setLikes] = useState<number>(160924);
  const [readMore, setReadMore] = useState<boolean>(false);
  const coba = (e: boolean) => {
    if (e) {
      setLikes((v) => v + 1);
    } else {
      setLikes((v) => v - 1);
    }
  };
  const cooments = 5;
  const caption =
    "Who is Kita? For the blind, she is vision. For the hungry, she is the chef. For the thirsty, she is water. If Kita thinks, I agree. If Kita speaks, I’m listening. If Kita has a million fans, I am one of them. If Kita has ten fans, I am one of them. If Kita has only one fan, that is me. If Kita has no fans, I no longer exist. If the whole world is against Kita , I am against the whole world. I will love Kita until my very last breath.";

  const images = [
    {
      src: "/uploads/kita5.jpeg",
      alt: "kita ikuyo",
      downloadUrl: "",
    },
  ];

  return (
    <div className="flex justify-center shadowContent pt-20 pb-5">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              className="h-auto max-w-full rounded-full"
              alt=""
              src={"/uploads/kita4.png"}
              width={40}
              height={40}
            />
            <p className="font-semibold font-custom">kita_ikuyo</p>
          </div>
          <div className="font-extrabold text-2xl">
            <p>...</p>
          </div>
        </div>
        <div>
          <Image
            onClick={() => {
              setActiveIdx(0);
              setVisible(true);
            }}
            className=""
            alt=""
            src={"/uploads/kita5.jpeg"}
            width={500}
            height={500}
          />
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
        <SvgFooter total={(e) => coba(e)} />
        <p className="font-medium text-base">{likes} likes</p>
        <div className="text-base flex gap-2 flex-wrap md:w-[30rem] w-56">
          <span className="font-semibold">kita_ikuyo </span>
          <div>
            <span className="font-normal">{trim(caption, 50, readMore)}</span>
            <span onClick={() => setReadMore((v) => !v)} className="opacity-80">
              {readMore ? "...less" : "...more"}
            </span>
          </div>
        </div>
        <p className="text-base opacity-80">view all {cooments} comments</p>
      </div>
    </div>
  );
};

export default PostImage;
