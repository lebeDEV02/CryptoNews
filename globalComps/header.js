import Link from "next/link"
import styles from "../styles/template-module-styles/Header.module.css";
const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__inner}>
					<Link href="/"><a className={styles.header__logolink} >
						<h6 className="header__inner-logo">CryptoNews</h6>
					</a></Link>
					<Link href="/"><a className={styles.header__link} >Home</a></Link>
					<Link href="/cryptonews	"><a className={styles.header__link}>All News</a></Link>
					<Link href="/info"><a className={styles.header__link} >Info</a></Link>
					<Link href="/categories"><a className={styles.header__link} >Categories</a></Link>
					<Link href="/login"><a className={styles.header__link} >Login</a></Link>
				</div>
			</div>
		</header>
	);
}

export default Header;