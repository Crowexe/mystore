import { useUser } from "../context/user";
import "./Login.css";

const Login = () => {
	const { login } = useUser();
	
	return (
		<section id="loginCont">
			<h1 id="title">My Store</h1>
			<div className="loginBox">
				<h1 className="login-title">Login</h1>
				<button onClick={login}>
					<i className="fas fa-power-off"/>
				</button>
			</div>
		</section>
	);
}

export default Login;