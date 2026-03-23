import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
const usePopularMovies = () => {
    // Fetch data from tmdb api nad update the store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS,
    );

    const json = await data.json();
    console.log(json?.results.map((title)=>title.original_title));

    dispatch(addPopularMovies(json?.results));

    
  };

  useEffect(() => { 
    getPopularMovies();
  }, []);
}

export default usePopularMovies;