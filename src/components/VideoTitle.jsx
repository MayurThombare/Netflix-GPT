import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white bg-gradient-to-r from-black to-transparent pt-[15%] px-6 md:px-24">
      <h1 className="text-2xl md:text-6xl font-bold w-1/2">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="my-2 md:p-4 mx-2 bg-white text-black py-1 px-3 md:px-12 text-xl hover:bg-white/80  rounded-lg">Play</button>
        <button className="hidden md:inline-block p-4 mx-2 bg-gray-500 text-white px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
