import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white bg-gradient-to-r from-black to-transparent pt-[20%] px-24">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-12 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="p-4 mx-2 bg-white text-black px-12 text-xl hover:bg-white/80  rounded-lg">Play</button>
        <button className="p-4 mx-2 bg-gray-500 text-white px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
