import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import {bg_Image} from "../utils/constants"
const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={bg_Image}
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
