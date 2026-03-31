import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { getGeminiResult } from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const dispatch = useDispatch();
    const searchText = useRef(null);

    const searchMovieTmdb = async (movie) =>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        const gptQuery =
            "Act as movie recommendation system and suggest some movie for the query " +
            searchText.current.value +
            ". only give me names of 5 movies, comma seperated like example result given ahead. Example result : gadar, sholay, 3idiots, koi mil gaya, lagaan";

        const result = await getGeminiResult(gptQuery);
        const movieNames = result.split(",").map((m) => m.trim());
        console.log(movieNames); // ["gadar", "sholay", ...]

        const  promiseArray = movieNames.map((movie)=> searchMovieTmdb(movie));

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGptMovieResults({movieName : movieNames, movieResults: tmdbResults }));
    };

    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
            <form
                action=""
                className="mx-2 w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    className="p-4 m-4 bg-white col-span-9 rounded-lg"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button
                    className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;