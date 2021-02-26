import CryptoNews from './CryptoNews';
import TechNews from './TechNews';
import Articles from './Articles';
const Main = () => {
	return (
		<main classNameName="main">
			<div className="container">
				<CryptoNews></CryptoNews>
				<TechNews></TechNews>
				<Articles></Articles>
			</div>
		</main>
	)
}

export default Main;