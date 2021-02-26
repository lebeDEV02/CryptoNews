import CryptoNewsList from './CryptoNewsList';
import TechNewsList from './TechNewsList';
import useFetch from './useFetch';
import Sidebar from './Sidebar';

const TechNews = () => {
	const { data: blogs, isPenging, error } = useFetch('http://localhost:9000/news')
	return (
		<section className="tech-news">
			<div className="tech-news__inner">
				<Sidebar title="News about Tech" about="Read the latest and hottest high tech news!" button="Read All"></Sidebar>
				{error && <div>{error}</div>}
				{isPenging && <div>Loading...</div>}
				{blogs && <TechNewsList blogs={blogs}></TechNewsList>}
			</div>
		</section>
	);
}

export default TechNews;