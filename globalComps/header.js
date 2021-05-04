import Link from "next/link"
import styles from "../styles/template-module-styles/Header.module.css";
const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__inner}>
					<a className={styles.header__logolink} href="/">
						<h6 className="header__inner-logo">CryptoNews</h6>
					</a>
					<Link href="/"><a className={styles.header__link} >Home</a></Link>
					<Link href="/all-news"><a className={styles.header__link}>All News</a></Link>
					<Link href="/info"><a className={styles.header__link} >Info</a></Link>
					<Link href="/categories"><a className={styles.header__link} >Categories</a></Link>
					<Link href="/login"><a className={styles.header__link} >Login</a></Link>
				</div>
			</div>
		</header>
	);
}

export default Header;