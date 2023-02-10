import FormButtons from "../components/FormButtons";
import { Link } from "react-router-dom";
import { useState } from "react";
import validator from "validator";

const Register = () => {
	const img_url =
		"https://denjets.netlify.app/static/media/denjets.6ef74d44.png";

	const [state, setState] = useState({
		first_name: "",
		last_name: "",
		email: "",
	});

	const handleLogin = (event) => {
		event.preventDefault();
		const first_name = state.first_name;
		const last_name = state.last_name;
		const email = state.email;

		if (first_name === "" || last_name === "" || email === "") {
			alert("You have not completed some field.");
			return;
		} else if (!validator.isEmail(email)) {
			alert("Invalid email address.");
			return;
		} else {
			alert("Thank you '" + first_name + "'");
			window.location = "/success";
			// redirect to the success page
			// console.log("submitting", state);
		}
	};

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setState({ ...state, [name]: value });
	};

	return (
		<section className="App py-5">
			<div className="container d-flex justify-content-center">
				<div className="col-md-6">
					<div className="text-center">
						<Link to="/">
							<img
								src={img_url}
								alt="Logo"
								className="img-fluid register_logo"
							/>
						</Link>
						<h4 className="pt-2">REGISTER</h4>
					</div>

					<form className="pt-5" onSubmit={handleLogin}>
						<div className="mb-3">
							<label className="labels">First Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Micheal"
								onChange={handleChange}
								name="first_name"
							/>
						</div>

						<div className="mb-3">
							<label className="labels">Last Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Uzoma"
								onChange={handleChange}
								name="last_name"
							/>
						</div>

						<div className="mb-3">
							<label className="labels">Email</label>
							<input
								type="email"
								className="form-control"
								placeholder="michealuzoma@gmial.com"
								onChange={handleChange}
								name="email"
							/>
						</div>

						<FormButtons />
					</form>
				</div>
			</div>
		</section>
	);
};

export default Register;
