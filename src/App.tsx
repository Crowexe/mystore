import Home from './components/Home';
import Login from "./components/Login";
import { useUser } from "./context/user";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from 'react-router-dom';
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
					<Link to="/">Home</Link>
					<Link to="/producto">Products</Link>
					<Link to="/logout"><Logout /></Link>
				</nav>
					<Switch>					
					<Route exact path="/">
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