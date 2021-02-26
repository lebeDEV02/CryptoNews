const CryptoNewsList = ({ blogs }) => {
	return (
		<div className="news-section__items">
			{blogs.map(blog => (
				<div className="news-section__item">
					<div className="news-section__item-text">
						<a className="news-section__item-link" href="new1.html">
							<h5 className="news-section__item-title title-junior">{blog.title}</h5>
						</a>
						<p className="news-section__item-text">{blog.description}</p>
					</div>
					<a className="news-section__item-link" href="#"><img src={blog.coverImage} className="news-section__item-img" /></a>
				</div>
			))}
		</div>
	);
}

export default CryptoNewsList;