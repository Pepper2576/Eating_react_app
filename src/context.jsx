import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

// use to fetch data from an API
const AppProvider = ({ children }) => {
	const [meals, setMeals] = useState([]);
	const fetchMeals = async (url) => {
		try {
			const { data } = await axios(url);
			setMeals(data.meals);
		} catch (e) {
			console.log(e.responce);
		}
	};

	useEffect(() => {
		fetchMeals(allMealsUrl);
	}, []);

	return (
		// pushes value to the children elements in the components
		<AppContext.Provider value={{ meals }}>{children}</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
