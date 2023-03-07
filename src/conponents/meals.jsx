import { useGlobalContext } from "../context";

const Meals = () => {
	// calls the meals useState
	const { meals } = useGlobalContext();

	return (
		<section>
			{/* Mapps the meal array */}
			{meals.map((singleMeal) => {
				console.log(singleMeal);
				// display element of the array
				return <h4>{singleMeal.strMeal}</h4>;
			})}
		</section>
	);
};

export default Meals;
