import React from 'react'
import Meal from './Meal'

const MealList = ({mealData}) => {
    const nutrients = mealData.nutrients;
  return <main>
    <div main="nutrients">
        <h1>Macros</h1>
        <ul>
            <li>Calories: {nutrients.calories?.toFixed(0)}</li>
            <li>Carbohydrates: {nutrients.carbohydrates?.toFixed(0)}</li>
            <li>Fats: {nutrients.fat?.toFixed(0)}</li>
            <li>Protien: {nutrients.protien?.toFixed(0)}</li>
        </ul>
    </div>

    <div className='meals'>
        {mealData.meals.map((meal) => {
            return <Meal key={meal.id} meal={meal} />
        })}
    </div>
  </main>
}

export default MealList