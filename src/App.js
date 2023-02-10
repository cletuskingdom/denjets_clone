import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
	const img_url =
		"https://denjets.netlify.app/static/media/denjets.6ef74d44.png";

	return (
		<section className="App py-5">
			<div className="container">
				<img src={img_url} alt="Logo" className="img-fluid" />
				<p> New Travel Experience Coming Soon... </p>
				<a
					className="btn btn-dark btn_b rounded-pill py-2 px-4"
					href="/signup"
				>
					Sign Up for Updates
				</a>
				<Link to="/register"></Link>
			</div>
		</section>
	);
};

export default App;
