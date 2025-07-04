import MovieGrid from "../MovieGrid/MovieGrid ";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import css from "./App.module.css";

export default function App() {
  const handleSearch = (saerchQuery: string) => {
    console.log(`Make Http request with ${saerchQuery}`);

    // const values = Object.fromEntries(formData);
    // console.log(values);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}
