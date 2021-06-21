import { useUser } from "../context/user";
import "./Login.css";

const Login = () => {
	const { login } = useUser();
	
	return (
		<div id="loginCont">
			<h1 className="login-title">Login</h1>
			<button onClick={login}>
				<i className="fas fa-power-off"/>
			</button>
		</div>
	);
}

export default Login;