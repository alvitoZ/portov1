import React, { useState } from "react";
import { RWebShare } from "react-web-share";

type child = {
  total: (data: boolean) => void;
};

const SvgFooter = ({ total }: child) => {
  const [likeButton, setLikeButton] = useState<boolean>(true);
  const [saved, setSaved] = useState<boolean>(true);

  const likeButtonEvent = () => {
    setLikeButton((e) => !e);
    total(likeButton);
  };

  const colorButtonLike = {
    color: `${likeButton ? "black" : "rgb(237,73,86)"}`,
  };
  return (
    <div className="flex justify-between z-50">
      <div className="flex gap-4 items-center">
        <svg
          style={colorButtonLike}
          aria-label="Like"
          onClick={likeButtonEvent}
          xmlns="http://www.w3.org/2000/svg"
          className={`cursor-pointer active:animate-coba2`}
          fill={`${likeButton ? "none" : "rgb(237,73,86)"}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.50"
          height={30}
          width={30}
        >
          <title>Like</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <svg
          aria-label="Comment"
          className="cursor-pointer hover:text-slate-400"
          color="rgb(0, 0, 0)"
          fill="rgb(0, 0, 0)"
          height="30"
          role="img"
          viewBox="0 0 24 24"
          width="30"
        >
          <title>Comment</title>
          <path
            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.50"
          ></path>
        </svg>
        <RWebShare
          data={{
            url: "",
            title: "",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <svg
            aria-label="Share Post"
            className="cursor-pointer hover:text-slate-400"
            color="rgb(0, 0, 0)"
            fill="rgb(0, 0, 0)"
            height="30"
            role="img"
            viewBox="0 0 24 24"
            width="30"
          >
            <title>Share Post</title>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="22"
              x2="9.218"
              y1="3"
              y2="10.083"
            ></line>
            <polygon
              fill="none"
              points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.50"
            ></polygon>
          </svg>
        </RWebShare>
      </div>
      <svg
        aria-label="Save"
        onClick={() => setSaved((v) => !v)}
        className="cursor-pointer hover:text-slate-400"
        color="rgb(0, 0, 0)"
        fill="rgb(0, 0, 0)"
        height="30"
        role="img"
        viewBox="0 0 24 24"
        width="30"
      >
        <title>Save</title>
        <polygon
          fill={`${saved ? "none" : "rgb(40,36,36)"}`}
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.50"
        ></polygon>
      </svg>
    </div>
  );
};

export default SvgFooter;
