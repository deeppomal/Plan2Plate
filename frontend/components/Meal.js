import React, {useState,useEffect} from 'react'

const Meal = ({meal}) => {
    const [imageUrl,setImageUrl] = useState("");

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
        })
    },[meal.id])
  return <article>
    <h1>{meal.title}</h1>
    <img src={imageUrl} alt="recipe" />
    <ul>
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
    </ul>

    <a href={meal.sourceUrl}>Go to recipe</a>
  </article>
}

export default Meal