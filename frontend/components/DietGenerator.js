import React from "react";
import { useState } from "react";
import { Tab, Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import MealList from './MealList';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DietGenerator = () => {
  let [categories] = useState({
    Anything: [
      {
        id: 1,
        title: "I want to eat ",
        subtitle: "Calories",
      },
    ],
    Paleo: [
      {
        id: 2,
        title: "I want to eat ",
        subtitle: "Calories",
      },
    ],
    Vegetarian: [
      {
        id: 3,
        title: "I want to eat ",
        subtitle: "Calories",
      },
    ],
    Vegan: [
      {
        id: 4,
        title: "I want to eat ",
        subtitle: "Calories",
      },
    ],
    Ketogenic: [
      {
        id: 5,
        title: "I want to eat ",
        subtitle: "Calories",
      },
    ],
    Mediterranean: [
      {
        id: 6,
        title: "I want to eat ",
        subtitle: "Calories",
      },
    ],
  });

  const [mealData,setMealData] = useState(null);
  const [calories,setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }
  
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=e00652e747d543d79cc4991ee4312387&timeFrame=day&targetCalories=${calories}`
    )
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    })
  }

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg" style={{ maxWidth: "73rem" }}>
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Plan2Plate creates personalized meal plans based on your food
              preferences, budget, and schedule.
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Reach your diet and nutritional goals with our calorie calculator,
              weekly meal plans, grocery lists and more. Create your meal plan
              right here in seconds.
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-white shadow-lg rounded-lg p-8 "
        style={{
          marginLeft: "25%",
          background: "#881337",
          maxWidth: "50%",
          marginTop: "-8%",
        }}
      >
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-bisque-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3
                        className="text-sm font-medium leading-5"
                        style={{ marginLeft: "18rem", marginBottom: "-1.3rem" }}
                      >
                        {post.title}
                      </h3>
                      <input
                        type="number"
                        id="id"
                        name="title"
                        style={{
                          marginLeft: "25rem",
                          borderStyle: "solid",
                          borderWidth: "2px",
                          borderRadius: "inherit",
                        }}
                        onChange={handleChange}
                      ></input>
                      <h3
                        className="text-sm font-medium leading-5"
                        style={{ marginLeft: "39rem", marginTop: "-1.5rem" }}
                      >
                        {post.subtitle}
                      </h3>
                    </li>
                  ))}
                </ul>
                <Menu
                  as="div"
                  className="relative inline-block text-left"
                  style={{ marginLeft: "25rem", marginTop: "2rem" }}
                >
                  <div>
                    <Menu.Button
                      className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      style={{ backgroundColor: "brown" }}
                      onClick={getMealData}
                    >
                      Generate
                      <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                    {mealData && <MealList mealData={mealData} />}
                  </div>
                </Menu>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default DietGenerator;
