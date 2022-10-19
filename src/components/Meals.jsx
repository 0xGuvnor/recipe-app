import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Meals = () => {
  const { meals, loading, selectMeal, addToFavourites } = useGlobalContext();

  return (
    <div>
      {loading ? (
        <section className="section">
          <h4>Loading...</h4>
        </section>
      ) : meals.length > 0 ? (
        <section className="section-center">
          {meals.map((meal) => {
            const { idMeal, strMeal: title, strMealThumb: image } = meal;

            return (
              <article key={idMeal} className="single-meal">
                <img
                  src={image}
                  alt={title}
                  className="img"
                  onClick={() => selectMeal(idMeal)}
                />
                <footer>
                  <h5>{title}</h5>
                  <button
                    className="like-btn"
                    onClick={() => addToFavourites(idMeal)}
                  >
                    <AiOutlineHeart />
                    {/* <AiFillHeart /> */}
                  </button>
                </footer>
              </article>
            );
          })}
        </section>
      ) : (
        <section className="section">
          <h4>No meals found. Please try other search terms.</h4>
        </section>
      )}
    </div>
  );
};

export default Meals;
