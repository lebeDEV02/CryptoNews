import './App.css';
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';

function App() {
	return (
		<Router>
			<div className="App">
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Main />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
