import styles from "./SearchBar.module.css";

// import { useState } from "react";

interface SearchFormProps {
  onSearch: (saerchQuery: string) => void;
}

// const API_KEY = "yuor_key"

export default function SearchBar({ onSearch }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {

    const query = formData.get("query") as string;
    console.log("handleSubmit", query);
    
    onSearch(query);
  };

  return (
    <>
      <header className={styles.header}>
         {" "}
        <div className={styles.container}>
             {" "}
          <a
            className={styles.link}
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
                  Powered by TMDB    {" "}
          </a>
             {" "}
          <form className={styles.form} action={handleSubmit}>
                 {" "}
            <input
              className={styles.input}
              type="text"
              name="query"
              autoComplete="off"
              placeholder="Search movies..."
              autoFocus
            />
                 {" "}
            <button className={styles.button} type="submit">
                      Search      {" "}
            </button>
               
          </form>
           
        </div>
      </header>
    </>
  );
}
