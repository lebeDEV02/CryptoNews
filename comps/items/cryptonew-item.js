
import useFetch from '../../customHooks/useFetch'

const CryptoNew = () => {
	const { data: cryptonew, isPending, error } = useFetch('http://localhost:8000/cryptonews/1');
	return (
		<div className="root">
			<main className="main">
				<div className="container">
					<div className="cryptonew-details">
						{isPending && <div>Loading...</div>}
						{error && <div>{error}</div>}
						{cryptonew && (
							<article>
								<h2 className="cryptonew-details__title">{cryptonew.title}</h2>
								<img className="cryptonew-details__img" src={cryptonew.coverImage} />
								<p className="cryptonew-details__content" >{cryptonew.content}</p>
							</article>
						)}
					</div>
				</div>
			</main>
		</div>
	)
}

export default CryptoNew;