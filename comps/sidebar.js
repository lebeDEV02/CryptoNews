import Link from "next/link"
const Sidebar = (prop) => {
	return (
		<div className="tech-news__sidebar">
			<h4 className="tech-news__title title-junior">{prop.title}</h4>
			<p className="tech-news__about">
				{prop.about}
			</p>
			<Link href={prop.to}><a className="tech-news__button">
				{prop.button}
			</a></Link>
		</div>
	);
}

export default Sidebar;