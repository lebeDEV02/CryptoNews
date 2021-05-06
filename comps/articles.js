import useFetch from '../customHooks/useFetch'
import ArticlesList from './lists/articleslist';
import Link from "next/link"
const Articles = () => {
	const { data: blogs, isPenging, error } = useFetch('http://localhost:8000/articles')
	return (
		<section className="articles">
			<div className="container">
				<div className="articles__top">
					<h4 className="articles__top-inscription title-junior">Articles</h4>
					<Link href="/articles"><a className="articles__top-link">
						<p className="articles__top-all">All Articles</p>
					</a></Link>
				</div>
				{error && <div>{error}</div>}
				{isPenging && <div>Loading...</div>}
				{blogs && <ArticlesList blogs={blogs}></ArticlesList>}
			</div>
		</section>
	);
}

export default Articles;