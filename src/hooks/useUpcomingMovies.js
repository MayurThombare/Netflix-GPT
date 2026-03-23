import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
const useUpcomingMovies = () => {
    // Fetch data from tmdb api nad update the store
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );

    const json = await data.json();
    console.log(json?.results.map((title)=>title.original_title));

    dispatch(addUpcomingMovies(json?.results));

    
  };

  useEffect(() => { 
    getUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;