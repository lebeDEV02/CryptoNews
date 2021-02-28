import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { History, useHistory } from 'react-router-dom';


const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isPosting, setIsPosting] = useState(false);
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { username, password };
		console.log(blog);
		setIsPosting(true);
	}
	return (
		<div className="App">
			<Header></Header>
			<main className="main">
				<div className="container">
					<div className="login">
						<h2>Login</h2>
						<form onSubmit={handleSubmit}>
							<label> Username:
					<input type="text" required
									value={username}
									onChange={(e) => {
										setUsername(e.target.value);
									}}
								/>
							</label>
							<label> Blog password:
						<input type="password" required value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}} ></input>
							</label>
							{!isPosting && <button>Login</button>}
							{isPosting && <button disabled>Trying to enter...</button>}
						</form>
					</div>
				</div>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default Login;