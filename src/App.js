import './App.css';
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import CryptoNew from './CryptoNew';
import Article from './Article';
import TechNew from './TechNew';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/cryptonews/:id">
					<CryptoNew></CryptoNew>
				</Route>
				<Route path="/technews/:id">
					<TechNew></TechNew>
				</Route>
				<Route path="/articles/:id">
					<Article></Article>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
