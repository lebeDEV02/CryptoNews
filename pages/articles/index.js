import Link from "next/link"

export const getStaticProps = async () => {
	const res = await fetch('http://localhost:8000/articles');
	const data = await res.json();

	return {
		props: { blogs: data }
	}
}

const Ninjas = ({ blogs }) => {

	return (
		<body>
			<div className="news-section__items">
				<div className="container container-page">
					{blogs.map(blog => (
						<div className="articles__item--big" key={blog.id}>
							<div className="news-section__item-text">
								<Link href={`/articles/${blog.id}`}><a className="news-section__item-title title-junior">{blog.title}</a></Link>
								<p className="news-section__item-descr">{blog.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</body>
	);
}

export default Ninjas;