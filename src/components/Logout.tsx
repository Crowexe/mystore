import { useUser } from "../context/user";

const Login = () => {
	const { logout } = useUser();
	
	return (
		<>
			<button className="bLogout" onClick={logout}>
				<i className="fas fa-power-off"/>
			</button>
		</>
	)
}

export default Login;