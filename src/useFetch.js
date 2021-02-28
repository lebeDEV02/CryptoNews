import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPenging, setIsPenging] = useState(true);
	const [error, setError] = useState(null);
	const abortCont = new AbortController();
	useEffect(() => {
		fetch(url, { signal: abortCont.signal })
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
				if (err.name === 'AbortError') {
					console.log('fetch aborted');
				} else {
					setError(err.message);
					setIsPenging(false);
				}
			})
		return () => abortCont.abort();
	}, [url]);
	return { data, isPenging, error };
}
export default useFetch;
