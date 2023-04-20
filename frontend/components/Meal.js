import React, { useState, useEffect } from "react";

const Meal = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=e00652e747d543d79cc4991ee4312387&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);
  return (
    // <article>
    //   <h1>{meal.title}</h1>
    //   <img src={imageUrl} alt="recipe" />
    //   <ul>
    //     <li>Preparation time: {meal.readyInMinutes} minutes</li>
    //     <li>Number of servings: {meal.servings}</li>
    //   </ul>

    //   <a href={meal.sourceUrl}>Go to recipe</a>
    // </article>
    <div class="max-w-sm rounded shadow-lg">
      <img class="w-full" src={imageUrl} alt="recipe" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{meal.title}</div>
        <p class="text-gray-700 text-base">
          Preparation Time: {meal.readyInMinutes}
        </p>
        <p class="text-gray-700 text-base">
          Number of Servings: {meal.servings}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href={meal.sourceUrl}
        >
          Go to Recipe
        </a>
      </div>
    </div>
  );
};

export default Meal;
