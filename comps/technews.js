import TechNewsList from './lists/technewslist';
import useFetch from '../customHooks/useFetch'
import Sidebar from './sidebar';

const TechNews = () => {
	const { data: blogs, isPenging, error } = useFetch('http://localhost:8000/technews')
	return (
		<section className="tech-news">
			<div className="tech-news__inner">
				<Sidebar title="News about Tech" about="Read the latest and hottest high tech news!" button="Read All" to={"/technews"}></Sidebar>
				{error && <div>{error}</div>}
				{isPenging && <div>Loading...</div>}
				{blogs && <TechNewsList blogs={blogs}></TechNewsList>}
			</div>
		</section>
	);
}

export default TechNews;