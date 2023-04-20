import React from "react";
import Meal from "./Meal";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


const MealList = ({ mealData }) => {
  const nutrients = mealData.nutrients;
  
  return (
    <>
        <div
        className="bg-white shadow-lg rounded-lg p-8 "
        style={{
          marginLeft: "25%",
          background: "#fff",
          maxWidth: "50%",
          marginTop: "2%",
          
        }}
      >
        <Tab.Group>
        <Tab.Panels className="mt-2">
        <Tab.Panel className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}>
                <h3 className="text-2xl font-medium leading-5" style={{fontWeight: "bold"}}>
                      Macros
                    </h3>
                <ul>
                    <li className="relative rounded-md p-3 hover:bg-gray-100">
                        Calories: {nutrients.calories?.toFixed(0)}
                    </li>
                    <li className="relative rounded-md p-3 hover:bg-gray-100">
                        Carbohydrates: {nutrients.carbohydrates?.toFixed(0)}
                    </li>
                    <li className="relative rounded-md p-3 hover:bg-gray-100">
                        Fat: {nutrients.fat?.toFixed(0)}
                    </li>
                    <li className="relative rounded-md p-3 hover:bg-gray-100">
                        Protein: {nutrients.protein?.toFixed(0)}
                    </li>
                </ul>
              </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      </div>
      
      <div
        className="bg-white shadow-lg rounded-lg p-8 "
        style={{
          marginLeft: "25%",
          background: "#fff",
          maxWidth: "50%",
          marginTop: "2%",
          
        }}
      >
        <div class="h-56 grid grid-cols-3 gap-4 content-start ...">
            {mealData.meals.map((meal) => {
                return <Meal key={meal.id} meal={meal} />
            })}
        </div>
      </div>
    </>
  );
};

export default MealList;
