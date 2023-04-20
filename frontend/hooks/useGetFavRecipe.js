import { useQuery } from "react-query";
import axios from "axios";

const fetchFavRecipes = (id) => {
  return axios.get(process.env.API_ENDPOINT + `/get-fav/${id}`);
};

export const useGetFavRecipe = (id) => {
  return useQuery(
    "fav" + id,
    () => fetchFavRecipes(id),
    {
      refetchOnMount: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      // enabled:false
    }
  );
};
