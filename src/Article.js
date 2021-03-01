import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import useFetch from './useFetch';

const Article = () => {
	const { id } = useParams();
	const { data: article, isPending, error } = useFetch('http://localhost:8000/articles/' + id);
	return (
		<div className="App">
			<Header></Header>
			<main className="main">
				<div className="container">
					<div className="article-details">
						{isPending && <div>Loading...</div>}
						{error && <div>{error}</div>}
						{article && (
							<article>
								<h2 className="article-details__title">{article.title}</h2>
								<img className="article-details__img" src={article.coverImage} />
								<p className="article-details__content" >{article.content}</p>
							</article>
						)}
					</div>
				</div>
			</main>
			<Footer></Footer>
		</div>

	);
}

export default Article;