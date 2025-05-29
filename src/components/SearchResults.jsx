import React from "react";
import Loader from "./Loader";

function SearchResults({ movies, isLoading }) {
  return (
    <div className=" w-1/2 p-4 overflow-auto">
      <h2>Search Results</h2>
      {isLoading ? (
        <Loader />
      ) : movies.length === 0 ? (
        <p>No Movies Found</p>
      ) : (
        <ul className="p-4 flex flex-col gap-4">
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <div className="flex gap-4">
                {movie.Poster !== "N/A" ? (
                  <img className=" h-30" src={movie.Poster} alt={movie.Title} />
                ) : (
                  <p>Image Not Found</p>
                )}
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">{movie.Title}</h3>
                  <p className="font-light">{movie.Year}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
