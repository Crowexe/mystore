import Home from './components/Home';
import Login from "./components/Login";
import { useUser } from "./context/user";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from 'react-router-dom';

const App = () => {
  const { user } = useUser();
  
  return (
    <Router>
    	{user ? 
		<>	
			<Link to="/">Home</Link>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</>
	  	: <Login />
		}
    </Router>
  );
}


export default App;
