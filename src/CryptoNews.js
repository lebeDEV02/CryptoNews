import CryptoNewsList from './CryptoNewsList';
import useFetch from './useFetch';

const CryptoNews = () => {
	const { data: blogs, isPenging, error } = useFetch('http://localhost:8000/cryptonews')
	return (
		<div className="main__inner">
			<section className="filters-section">
				<div className="filters-section__items">
					<p className="filters-section__item">
						Bitcoin
							</p>
					<p className="filters-section__item">
						Crypto
							</p>
					<p className="filters-section__item">
						Blockchain
							</p>
					<p className="filters-section__item">
						Events
							</p>
					<p className="filters-section__item">
						Media
							</p>
				</div>
			</section>
			<section className="news-section">
				{error && <div>{error}</div>}
				{isPenging && <div>Loading...</div>}
				{blogs && <CryptoNewsList blogs={blogs}></CryptoNewsList>}
			</section>

		</div>
	);
}

export default CryptoNews;