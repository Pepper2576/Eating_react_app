import { useGlobalContext } from "../context";
// imports thumd icon from react icons and bootstrap
import { BsHandThumbsUp } from "react-icons/bs";

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
						// uneque key required
						key={idMeal}
						className='single-meal'
					>
						<img
							src={image}
							alt='Food'
							className='img'
						/>
						<footer>
							<h5>{title}</h5>
							<button className='like-btn'>
								<BsHandThumbsUp />
							</button>
						</footer>
					</div>
				);
			})}
		</section>
	);
};

export default Meals;
