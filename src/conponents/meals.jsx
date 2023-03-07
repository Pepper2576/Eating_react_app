import { useGlobalContext } from "../context";

const Meals = () => {
	// calls the meals useState
	const { meals } = useGlobalContext();

	return (
		<section className='section-center'>
			{/* Mapps the meal array */}
			{meals.map((singleMeal) => {
				// assining elements of the array uneque values
				const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
				// display element of the array
				return (
					<div
						key={idMeal}
						className='single-meal'
					>
						<img
							src={image}
							alt='Food'
							style={{ width: "200px" }}
							className='img'
						/>
						<footer>
							<h5>{title}</h5>
							<button className='like-btn'>click me</button>
						</footer>
					</div>
				);
			})}
		</section>
	);
};

export default Meals;
