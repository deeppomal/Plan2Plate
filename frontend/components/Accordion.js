import React, { useState } from "react";
import AccordionUI from "../components/AccordionUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "How do I use the recipe generator?",
      answer:
        "To use the recipe generator, simply enter the ingredients you have on hand or the type of dish you want to make, and the website will provide you with a list of recipes that match your criteria.",
    },
    {
      id: 2,
      question:
        "Can I customize the recipes to suit my dietary needs or preferences?",
      answer:
        "Yes, many recipe generator websites allow you to filter recipes based on dietary restrictions or preferences, such as gluten-free, vegan, or low-carb. You can also adjust ingredients or quantities to suit your personal tastes.",
    },
    {
      id: 3,
      question: "How reliable are the recipes generated by the website?",
      answer:
        "Most recipe generator websites use algorithms that draw from reputable sources like cookbooks, food blogs, and professional chefs. However, it's always a good idea to double-check the recipe and read reviews or comments from other users before trying it out.",
    },
    {
      id: 4,
      question: "Can I save or print the recipes generated by the website?",
      answer:
        "Yes, many recipe generator websites allow you to save or print recipes for future reference. You may also be able to create an account to save your favorite recipes or create shopping lists.",
    },
    {
      id: 5,
      question:
        "Is there a way to see ratings or reviews of the recipes generated by other users?",
      answer:
        "Yes, many recipe generator websites have a community of users who can rate and review recipes. You can often see comments, photos, and ratings from other users to get an idea of how the recipe turned out for them.",
    },
  ];

  return (
    <div className="flex relative flex-col justify-center items-center md:mt-10 md:mx-30 p-10 rounded-xl h-auto py-5 mb-20">
      <p className="text-center font-bold text-3xl">FAQ</p>
      {/* {data.map((item) => {
        return (
          <>
            <AccordionUI
              title={item.question}
              Id={item.id}
              children={item.answer}
              Index={Index}
              setIndex={setIndex}
            ></AccordionUI>
          </>
        );
      })} */}
    </div>
  );
};
export default Accordion;
