import React, { useEffect, useState } from "react";
import StarRating from "./components/StarRating";
import TextExpander from "./components/TextExpander";
import NavBar from "./components/NavBar";
import SearchResults from "./components/SearchResults";
import WatchedMovies from "./components/WatchedMovies";
import Logo from "./components/Logo";
import SearchBox from "./components/SearchBox";
import FoundSearch from "./components/FoundSearch";

const KEY = "50aa3482";

function App() {
  const [movies, setMovies] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const query = "inception";

  // useEffect(function () {
  //   fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.Response === "True") setMovies(data.Search);
  //     });
  // }, []);

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok) throw new Error("Something Went Wrong");

        const data = await res.json();
        setMovies(data.Search);
        console.log(data.Search);
        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <NavBar>
        <Logo />
        <SearchBox />
        <FoundSearch />
      </NavBar>
      <div className="flex justify-center w-full">
        <SearchResults movies={movies} isLoading={isLoading} />
        <WatchedMovies />
      </div>
    </div>
  );
}

export default App;
