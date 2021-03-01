import { Link } from 'react-router-dom';
const TechNewsList = ({ blogs }) => {
	return (
		<div className="news-section__items">
			{blogs.map(blog => (
				<div className="news-section__item" key={blog.id}>
					<div className="news-section__item-text">
						<Link className="news-section__item-link" to={`technews/${blog.id}`}>
							<h5 className="news-section__item-title title-junior">{blog.title}</h5>
						</Link>
						<p className="news-section__item-text">{blog.description}</p>
					</div>
					<Link className="news-section__item-link" to={`technews/${blog.id}`}><img src={blog.coverImage} className="news-section__item-img" /></Link>
				</div>
			))}
		</div>
	);
}

export default TechNewsList;