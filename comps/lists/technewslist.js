const TechNewsList = ({ blogs }) => {
	return (
		<div className="news-section__items">
			{blogs.map(blog => (
				<div className="news-section__item" key={blog.id}>
					<div className="news-section__item-text">
						<h5 className="news-section__item-title title-junior">{blog.title}</h5>
						<p className="news-section__item-text">{blog.description}</p>
					</div>
					<img src={blog.coverImage} className="news-section__item-img" />
				</div>
			))}
		</div>
	);
}

export default TechNewsList;