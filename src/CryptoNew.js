import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import useFetch from './useFetch';

const Cryptonew = () => {
	const { id } = useParams();
	const { data: cryptonew, isPending, error } = useFetch('http://localhost:8000/cryptonews/' + id);
	return (
		<div className="App">
			<Header></Header>
			<main className="main">
				<div className="container">
					<div className="cryptonew-details">
						{isPending && <div>Loading...</div>}
						{error && <div>{error}</div>}
						{cryptonew && (
							<article>
								<h2 className="cryptonew-details__title">{cryptonew.title}</h2>
								<img className="cryptonew-details__img" src={cryptonew.coverImage} />
								<p className="cryptonew-details__content" >{cryptonew.content}</p>
							</article>
						)}
					</div>
				</div>
			</main>
			<Footer></Footer>
		</div>

	);
}

export default Cryptonew;