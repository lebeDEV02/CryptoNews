import Head from 'next/head'
import Image from 'next/image'
import CryptoNews from '../comps/cryptonews'
import TechNews from '../comps/technews'
import Articles from '../comps/articles'
import Header from '../globalComps/header'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<body>
			<main className="main">
				<div className="container">
					<CryptoNews></CryptoNews>
					<TechNews></TechNews>
					<Articles></Articles>
				</div>
			</main>
		</body>
	)
}
