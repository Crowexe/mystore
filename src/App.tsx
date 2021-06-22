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
import Personal from './components/Personal';
import Compra from './components/Compra';
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
						<img src="https://i.imgur.com/vPuNXMK.png" alt="logo-bar"/>
						<h2 className="title">My Store</h2>
					</div>
					<div className="top-bar-content">
						<Link to="/"><i className="fas fa-home"/></Link>
						<Link to="/producto"><i className="fas fa-clipboard-list"/></Link>
						<Link to="/personal"><i className="fas fa-user-friends"/></Link>
						<Link to="/compra"><i className="fas fa-shopping-cart"/></Link>
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
					<Route path="/personal">
						<Personal />
					</Route>
					<Route path="/compra">
						<Compra />
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
