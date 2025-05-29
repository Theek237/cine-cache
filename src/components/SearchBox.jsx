import React, { useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="cursor-pointer">Search</button>
    </form>
  );
}

export default SearchBox;
