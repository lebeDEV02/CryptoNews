import { useParams } from "react-router-dom";

const Article = () => {
	const { id } = useParams();
	return (
		<h1>This article with id: {id}</h1>
	);
}

export default Article;