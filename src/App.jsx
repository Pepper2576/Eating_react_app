import "./App.css";
import Fav from "./conponents/favorites";
import Meals from "./conponents/meals";
import Modal from "./conponents/modal";
import Search from "./conponents/search";

// App component for root html div
function App() {
	// app components
	return (
		<main>
			<Search />
			<Fav />
			<Meals />
			<Modal />
		</main>
	);
}

export default App;
