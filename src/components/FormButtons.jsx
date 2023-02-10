import { Link } from "react-router-dom";
const FormButtons = () => {
	return (
		<div className="d-flex justify-content-between">
			<button className="btn btn-dark btn_b rounded-pill py-2 px-4">
				Register
			</button>

			<div>
				<Link to="/" className="app-link pt-3">
					Back to Home
				</Link>

				<Link to="/login" className="ps-3 app-link pt-3">
					Login
				</Link>
			</div>
		</div>
	);
};

export default FormButtons;
