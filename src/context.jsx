import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

// use to fetch data from an API
const AppProvider = ({ children }) => {
	// useStates for meals
	const [meals, setMeals] = useState([]);
	// axios fetch method
	const fetchMeals = async (url) => {
		try {
			// const {data} gets the data element of the API array
			const { data } = await axios(url);
			// Uses teh setMeals element of the useState to set the displayed API data
			setMeals(data.meals);
		} catch (e) {
			console.log(e.responce);
		}
	};
	// uses the const to set the URL of the API must be in the useEffect or you'll get infernate loop
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
