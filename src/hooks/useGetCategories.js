import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCatgories } from "../exports";

export const useGetCategories = (url) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const categories = ["All", ...data.data];
        dispatch(updateCatgories(categories));
      });
  }, []);
};
