import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineHeart } from "react-icons/ai";

const Meals = () => {
  const { meals, loading } = useGlobalContext();
  console.log(meals);

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
                <img src={image} className="img" />
                <footer>
                  <h5>{title}</h5>
                  <button className="like-btn">
                    <AiOutlineHeart />
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
