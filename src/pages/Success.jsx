import { Link } from "react-router-dom";

const Success = () => {
	return (
		<section className="App py-5">
			<div className="container text-center">
				<Link to="/">
					<img
						src="https://denjets.netlify.app/static/media/denjets.6ef74d44.png"
						alt="Logo"
						className="img-fluid"
					/>
				</Link>
				<h1 className="tnx">Thanks for Subscribing</h1>
			</div>
		</section>
	);
};

export default Success;
