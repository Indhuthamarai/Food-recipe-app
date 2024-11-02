import React from "react";
import './styles.css'

const MealItem = (getMeal) => {
    console.log(getMeal.data)
  return (
    <div className="card">
      <div className="cardb">
      <img src={getMeal.data.strMealThumb} alt="cake"></img>
      <div className="info">
        <h2>{getMeal.data.strMeal}</h2>
        <p>{getMeal.data.strArea}</p>
      </div>
      </div>
      <div className="recipe-container">
        <h2>Recipe</h2>
        <p>{getMeal.data.strInstructions}</p>
        <img src={getMeal.data.strMealThumb} alt="nothing"></img>
        <a href={getMeal.data.strSource}>Watch Video</a>
      </div>
    </div>
  )
}

export default MealItem;