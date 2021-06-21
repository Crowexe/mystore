import { useUser } from "../context/user";

const Login = () => {
	const { login } = useUser();
	
	return (
		<>
			<h1 id="login-title">Login</h1>
			<button onClick={login}>
				<i className="fas fa-power-off"/>
			</button>
		</>
	);
}

export default Login;