import React from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/legacy/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DietGenerator = () => {
  let [categories] = useState({
    Anything: [
      {
        image: <Image src="/sandwich.png" />
      }
    ],
    Paleo: [],
    Vegetarian: [],
    Vegan: [],
    Ketogenic: [],
    Mediterranean: []
  });

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
                image={category.image}
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default DietGenerator;
