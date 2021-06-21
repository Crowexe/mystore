import { useUser } from "../context/user";

const Login = () => {
	const { logout } = useUser();
	
	return (
		<>
			<button className="bLogout" onClick={logout}>Logout</button>
		</>
	)
}

export default Login;