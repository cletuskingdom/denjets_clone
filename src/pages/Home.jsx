import { Link } from "react-router-dom";

const Home = () => {
	const img_url =
		"https://denjets.netlify.app/static/media/denjets.6ef74d44.png";

	return (
		<section className="App py-5">
			<div className="container text-center">
				<img src={img_url} alt="Logo" className="img-fluid" />
				<p> New Travel Experience Coming Soon... </p>
				<Link
					className="btn btn-dark btn_b rounded-pill py-2 px-4"
					to="/register"
				>
					Sign Up for Updates
				</Link>
			</div>
		</section>
	);
};

export default Home;
