const ArticlesList = ({ blogs }) => {
	return (
		<div className="articles__items">
			{blogs.map(blog => (
				<div className="articles__item">
					<a className="articles__item-link" href="article1.html">
						<h6 className="articles__item-title title-junior">{blog.title}</h6>
					</a>
					<p className="articles__item-descr">{blog.description}</p>
					<a className="articles__item-button" href="article1.html">Read More</a>
				</div>
			))}
		</div>
	);
}

export default ArticlesList;