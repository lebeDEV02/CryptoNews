import { Link } from "react-router-dom";

const ArticlesList = ({ blogs }) => {
	return (
		<div className="articles__items">
			{blogs.map(blog => (
				<div className="articles__item " key={blog.id}>
					<Link className="articles__item-link" to={`/articles/${blog.id}`}>
						<h6 className="articles__item-title title-junior">{blog.title}</h6>
					</Link>
					<p className="articles__item-descr">{blog.description}</p>
					<Link className="articles__item-button" to={`articles/${blog.id}`}>Read More</Link>
				</div>
			))}
		</div>
	);
}

export default ArticlesList;