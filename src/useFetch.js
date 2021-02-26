import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPenging, setIsPenging] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		fetch(url)
			.then(db => {
				if (!db.ok) {
					throw Error('could not fetch the data');
				}
				return db.json();
			})
			.then(data => {
				setData(data);
				setIsPenging(false);
				setError(false);
			})
			.catch(err => {
				setError(err.message);
				setIsPenging(false);
			})
	}, [url]);
	return { data, isPenging, error };
}
export default useFetch;
