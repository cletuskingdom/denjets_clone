import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const logo_1 =
		"https://denjets.netlify.app/static/media/denjets.6ef74d44.png";

	const [state, setState] = useState({ username: "", age: null });
	const handleLogin = (event) => {
		event.preventDefault();
		const age = state.age;
		const username = state.username;

		if (age === "" && username === "") {
			alert("You have not filled some field");
			return;
		} else if (!Number(age)) {
			alert("Your age must be a number");
			return;
		} else {
			alert("Your age: " + age + ", and your age is: " + username);
			// console.log("submitting", state);
		}
	};

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setState({ ...state, [name]: value });
	};

	return (
		<div className="App">
			<div className="text-center">
				<Link to="/">
					<img
						src={logo_1}
						alt="Logo"
						className="img-fluid register_logo"
					/>
				</Link>
				<h4 className="pt-2 pb-4">LOGIN</h4>

				<p className="tnx"> Coming Soon... </p>
			</div>

			<section className="d-none">
				<div className="container py-5">
					<form onSubmit={handleLogin}>
						<div className="mb-3">
							<label>
								Email:
								<input
									type="email"
									className="form-control"
									placeholder="michealf@gmail.com"
									name="username"
									onChange={handleChange}
								/>
							</label>
						</div>

						<div className="mb-3">
							<label>
								Age:
								<input
									type="text"
									className="form-control"
									placeholder="25"
									name="age"
									onChange={handleChange}
								/>
							</label>
						</div>

						<button
							className="btn btn-dark px-5 btn-sm"
							type="submit"
						>
							LOGIN
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Login;
