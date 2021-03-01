import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import useFetch from './useFetch';

const TechNew = () => {
	const { id } = useParams();
	const { data: technew, isPending, error } = useFetch('http://localhost:8000/technews/' + id);
	return (
		<div className="App">
			<Header></Header>
			<main className="main">
				<div className="container">
					<div className="technew-details">
						{isPending && <div>Loading...</div>}
						{error && <div>{error}</div>}
						{technew && (
							<article>
								<h2 className="technew-details__title">{technew.title}</h2>
								<img className="technew-details__img" src={technew.coverImage} />
								<p className="technew-details__content" >{technew.content}</p>
							</article>
						)}
					</div>
				</div>
			</main>
			<Footer></Footer>
		</div>

	);
}

export default TechNew;