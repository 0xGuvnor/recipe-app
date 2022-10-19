import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text) setSearchTerm(text);
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    fetchRandomMeal();
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Find a recipe"
          className="form-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={handleRandomMeal}
        >
          Surprise Me
        </button>
      </form>
    </header>
  );
};

export default Search;
