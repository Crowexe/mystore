import { useUser } from "../context/user";

const Login = () => {
	const { logout } = useUser();
	
	return (
		<>
			<button onClick={logout}>Logout</button>
		</>
	)
}

export default Login;