import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Success from "./pages/Success";

const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/register" element={<Register />} />
			<Route exact path="/login" element={<Login />} />
			<Route exact path="/success" element={<Success />} />
		</Routes>
	);
};

export default App;
