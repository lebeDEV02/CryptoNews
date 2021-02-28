import useFetch from './useFetch';
import ArticlesList from './ArticlesList';
const Articles = () => {
	const { data: blogs, isPenging, error } = useFetch('http://localhost:8000/articles')
	return (
		<section className="articles">
			<div className="container">
				<div className="articles__top">
					<h4 className="articles__top-inscription title-junior">Articles</h4>
					<a className="articles__top-link" href="#">
						<p className="articles__top-all">All Articles</p>
					</a>
				</div>
				{error && <div>{error}</div>}
				{isPenging && <div>Loading...</div>}
				{blogs && <ArticlesList blogs={blogs}></ArticlesList>}
			</div>
		</section>
	);
}

export default Articles;