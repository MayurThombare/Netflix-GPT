import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
const useTopRatedMovies = () => {
    // Fetch data from tmdb api nad update the store
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS,
    );

    const json = await data.json();
    console.log(json?.results.map((title)=>title.original_title));

    dispatch(addTopRatedMovies(json?.results));

    
  };

  useEffect(() => { 
    getTopRatedMovies();
  }, []);
}

export default useTopRatedMovies;