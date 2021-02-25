const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<a className="header__inner-logolink" href="index.html">
						<h6 className="header__inner-logo">CryptoNews</h6>
					</a>
					<ul className="header__inner-menu">
						<li className="header__inner-item"><a className="header__inner-link" href="#">Home</a></li>
						<li className="header__inner-item"><a className="header__inner-link" href="#">All News</a></li>
						<li className="header__inner-item"><a className="header__inner-link" href="#">Info</a></li>
						<li className="header__inner-item"><a className="header__inner-link" href="#">Categories</a></li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;