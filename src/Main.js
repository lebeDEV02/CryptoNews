import CryptoNews from './CryptoNews';
import TechNews from './TechNews';
import Articles from './Articles';
import Header from './Header';
import Footer from './Footer';
const Main = () => {
	return (
		<div className="App">
			<Header></Header>
			<main className="main">
				<div className="container">
					<CryptoNews></CryptoNews>
					<TechNews></TechNews>
					<Articles></Articles>
				</div>
			</main>
			<Footer></Footer>
		</div>
	)
}

export default Main;