import { useUser } from "./context/user";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from 'react-router-dom';
import Home from './components/Home';
import Login from "./components/Login";
import Productos from './components/Productos';
import Logout from './components/Logout';
import "./App.css";

const App = () => {
  const { user } = useUser();
  
  
  return (
	<div id="routers">
		<Router>
			{user ? 
			<>	
				<nav className="top-bar">
						<div className="izqThing">
							<Link to="/">
								<img src="https://i.imgur.com/vPuNXMK.png" alt="logo-bar"/>My Store
							</Link>
						</div>
						<div className="top-bar-content">
							<Link to="/producto">
								<i className="fas fa-clipboard-list"/>
							</Link>
						<Logout />
					</div>
				</nav>
				<Switch>					
					<Route exact path="/">
						<Home />				
					</Route>
					<Route path="/logout">
						<Home />				
					</Route>
					<Route path="/producto">
						<Productos />
					</Route>
				</Switch>
			</>
			: <Login />
			}
		</Router>
	</div>
  );
}


export default App;
