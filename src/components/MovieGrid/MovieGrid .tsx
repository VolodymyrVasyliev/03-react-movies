import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";

interface MoviGridPropse {
  movies: Movie[];
}
const posterBaseUrl = "https://image.tmdb.org/t/p/w500/";

export default function MovieGrid({ movies }: MoviGridPropse) {
  return (
    <ul className={css.grid}>
       {" "}
      {movies.map((movie) => (
        <li key={movie.id}>
             {" "}
          <div className={css.card}>
                 {" "}
            <img
              className={css.image}
              src={posterBaseUrl + movie.poster_path}
              alt="movie title"
              loading="lazy"
            />
                <h2 className={css.title}>{movie.title}</h2>   {" "}
          </div>
           {" "}
        </li>
      ))}
       {" "}
    </ul>
  );
}
