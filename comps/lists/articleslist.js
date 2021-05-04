
const ArticlesList = ({ blogs }) => {
	return (
		<div className="articles__items">
			{blogs.map(blog => (
				<div className="articles__item " key={blog.id}>
					<h6 className="articles__item-title title-junior">{blog.title}</h6>
					<p className="articles__item-descr">{blog.description}</p>
				</div>
			))}
		</div>
	);
}

export default ArticlesList;