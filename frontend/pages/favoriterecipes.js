import React, { useState, useEffect } from "react";
import { NavbarNew } from "../components/NavbarNew";
import { RecipeModal } from '../components/RecipeModal';
import { FavoriteContainer } from "../components/FavoriteContainer";
import { useGetRecipeDetail } from '../hooks/useGetRecipeDetail';
import axios from "axios";

const FavouriteRecipes = () => {
  const [favoriteData, setFavoriteData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipeID, setRecipeID] = useState("715769");

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const result = await axios.get(
          process.env.API_ENDPOINT + `/get-fav/${id}`
        );
        console.log(result.data);
        setFavoriteData(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData("111");
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleRecipeID = (id) => {
    setRecipeID(id);
    // recipeDetailRefetch()
  };
  const { data: recipeDetailData,refetch: recipeDetailRefetch} = useGetRecipeDetail(recipeID);
  return (
    <div className="bg-gray-100">
      <NavbarNew />
      <div className="pt-28 min-h-screen flex">
        <FavoriteContainer
          recipeList={favoriteData}
          toggleModal={toggleModal}
          handleRecipeID={handleRecipeID}
        />
        {isModalOpen && recipeDetailData && <RecipeModal toggleModal={toggleModal} data={recipeDetailData?.data} />}
      </div>
    </div>
  );
};

export default FavouriteRecipes;
