import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import UserDetailsPage from "./pages/UserDetailsPage";
import UsersPage from "./pages/UsersPage";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={UsersPage} />
				<Route path="/user/:id" component={UserDetailsPage} />
			</Switch>
		</Router>
	);
};

export default App;
