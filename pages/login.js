import styles from "../styles/template-module-styles/login.module.css"
import { useState } from "react";
const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { username, password };
		console.log(blog);
	}
	return (
		<body>
			<div className="container container-page">
				<div className={styles.login}>
					<h2 className={styles.title}>Login</h2>
					<form onSubmit={handleSubmit}>
						<label className={styles.label}> Username:
					<input className={styles.input} type="text" required
								value={username}
								onChange={(e) => {
									setUsername(e.target.value);
								}}
							/>
						</label>
						<label className={styles.label}> Blog password:
						<input className={styles.input} type="password" required value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}} ></input>
						</label>
						<button className={styles.button}>Login</button>
					</form>
				</div>
			</div>
		</body>
	);
}

export default Login;