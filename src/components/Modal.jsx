import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  let ingredientsList = [];
  let tempObj = {};
  for (const key in selectedMeal) {
    if (key.includes("Ingredient") && selectedMeal[key].trim()) {
      const ingredientCount = key.match(/\d+$/)[0];
      const newKey = `item${ingredientCount}`;

      tempObj[newKey] = {
        ...tempObj[newKey],
        ingredient: selectedMeal[key].trim(),
      };
    } else if (key.includes("Measure") && selectedMeal[key].trim()) {
      const ingredientCount = key.match(/\d+$/)[0];
      const newKey = `item${ingredientCount}`;

      tempObj[newKey] = {
        ...tempObj[newKey],
        measurement: selectedMeal[key].trim(),
      };
    }
  }
  for (const key in tempObj) {
    ingredientsList.push(tempObj[key]);
  }

  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt={title} className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>
            <b>Ingredients</b>
          </p>
          <ul>
            {ingredientsList.map((meal) => (
              <li>
                {meal.ingredient} - {meal.measurement}
              </li>
            ))}
          </ul>
          <p>
            <b>Instructions</b>
          </p>
          <p>{text}</p>
          <a href={source} target="_blank" rel="noreferrer">
            Source
          </a>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
