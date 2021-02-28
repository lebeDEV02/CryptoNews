import { Link } from 'react-router-dom';
const Header = () => {
	return (

		<header className="header">
			<div className="container">
				<div className="header__inner">
					<Link className="header__inner-logolink" to="/">
						<h6 className="header__inner-logo">CryptoNews</h6>
					</Link>
					<Link className="header__inner-link" to="/">Home</Link>
					<Link className="header__inner-link" to="/all-news">All News</Link>
					<Link className="header__inner-link" to="/info">Info</Link>
					<Link className="header__inner-link" to="/categories">Categories</Link>
					<Link className="header__inner-link" to="/login">Login</Link>
				</div>
			</div>
		</header>

	);
}

export default Header;