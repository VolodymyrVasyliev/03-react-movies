import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import css from "./App.module.css";
import toast from "react-hot-toast";
import type { Movie } from "../../types/movie";
import { useState } from "react";
import { fetchMovies } from "../../services/movieService";
import { Toaster } from "react-hot-toast";


export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>();



  const handleSearch = async (searchQuery: string) => {

    try {
      setIsError(false);
      setMovies([]);
      setIsloading(true)
      const newMovies = await fetchMovies(searchQuery);

      if (newMovies.length === 0) {
        toast("No movies found for your request.", {
          duration: 3000,
          position: "top-center",
        });
      }

      setMovies(newMovies);
    } catch {
      setIsError(true);
    } finally {
      setIsloading(false)
    }
  };

  const handleSelectedMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };



  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      {movies.length > 0 && (
        <MovieGrid onSelect={handleSelectedMovie} movies={movies} />
      )}
      {isModalOpen && selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
};


