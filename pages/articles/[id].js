import styles from "../../styles/template-module-styles/New.module.css";
export const getStaticPaths = async () => {
	const res = await fetch('http://localhost:8000/articles');
	const data = await res.json();

	const paths = data.map(item => {
		return {
			params: { id: item.id.toString() }
		}
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async (context) => {
	const id = context.params.id;

	const res = await fetch('http://localhost:8000/articles/' + id);
	const data = await res.json();

	return {
		props: { item: data }
	}
}
const Details = ({ item }) => {
	return (
		<body>
			<main className="main">
				<div className="container container-page">
					<div className="cryptonew-details">
						{item && (
							<article>
								<h2 className={styles.title}>{item.title}</h2>
								<img className={styles.img} src={item.coverImage} />
								<p className={styles.description} >{item.content}</p>
							</article>
						)}
					</div>
				</div>
			</main>
		</body>
	)
}

export default Details;