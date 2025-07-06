import axios from "axios";
import type {Movie} from "../types/movie"

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const myKey = import.meta.env.VITE_API_KEY;


interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string) => {
    const response = await axios.get<FetchMoviesResponse>("/search/movie", {
      params: {
        query,
        include_adult: false,
        //   page: 1,
      },
      headers: {
        Authorization: `Bearer ${myKey}`,
        accept: "application/json",
      },
    });
    return response.data.results

}
