import React from "react";
import { FavoriteCard } from "./FavoriteCard";

export const FavoriteContainer = ({
  recipeList,
  toggleModal,
  handleRecipeID,
}) => {
  return (
    <div className="w-3/4 flex flex-wrap p-3 items-center ">
      {recipeList?.map((data, index) => {
        return (
          <FavoriteCard
            data={data}
            key={data.id}
            toggleModal={toggleModal}
            handleRecipeID={handleRecipeID}
          />
        );
      })}
    </div>
  );
};
