import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid ";
// import { myKey } from "../../services/movieService";
import css from "./App.module.css";
import { useState } from "react";
import type { Movie } from "../../types/movie";
import { fetchMovies } from "../../services/movieService";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isloading, setIsloading] = useState(false);

  const handleSearch = async (searchQuery: string) => {
    setIsloading(true)
    const newMovies = await fetchMovies(searchQuery);

    setMovies(newMovies);
  };

  return (
    <div className={css.app}>
      <SearchBar onSearch={handleSearch} />
      {isLOading && }
      {movies.length > 0 && <MovieGrid movies={movies} />}
    </div>
  );
}
