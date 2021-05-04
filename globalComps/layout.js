import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
	return (
		<div className="root">
			<Header></Header>
			{children}
			<Footer></Footer>
		</div>
	);
}

export default Layout;