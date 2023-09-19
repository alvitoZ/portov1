import React, { useState } from "react";
import Image from "next/image";
import SvgFooter from "../atoms/SvgFooter";
import { trim } from "@/utils/trim";
import ImagePost from "../molecules/ImagePost";

const PostImage = () => {
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

  return (
    <div className="flex justify-center shadowContent pt-20 pb-5 w-fit h-fit px-10 rounded-sm">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              className="h-auto max-w-full rounded-full hover:scale-150 hover:rounded-none"
              alt=""
              src={"/uploads/profil.png"}
              width={40}
              height={40}
            />
            <p className="font-semibold font-custom">kita_ikuyo</p>
          </div>
          <div className="font-extrabold text-2xl">
            <p>...</p>
          </div>
        </div>
        <ImagePost />
        <SvgFooter total={(e) => coba(e)} />
        <p className="font-medium text-base">{likes} likes</p>
        <div className="text-base flex gap-2 flex-wrap lg:w-[28rem] md:w-[20rem] w-56">
          <span className="font-semibold">kita_ikuyo </span>
          <div
            className="cursor-pointer"
            onClick={() => setReadMore((v) => !v)}
          >
            <span className="font-normal">{trim(caption, 50, readMore)}</span>
            <span className="opacity-80">
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
