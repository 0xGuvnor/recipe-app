import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const useGlobalContext = () => {
  return useContext(AppContext);
};

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const fetchMeals = async (url) => {
    try {
      const { data } = await axios(url);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  return (
    <AppContext.Provider value="hello world">{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider, useGlobalContext };
