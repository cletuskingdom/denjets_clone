import { useState } from "react";
import "./App.css";

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
			<header className="App-header">
				<img src={logo_1} className="logo" alt="logo" />
			</header>

			<section>
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
