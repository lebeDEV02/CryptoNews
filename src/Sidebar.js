const Sidebar = (prop) => {
	return (
		<div className="tech-news__sidebar">
			<h4 className="tech-news__title title-junior">{prop.title}</h4>
			<p className="tech-news__about">
				{prop.about}
			</p>
			<a className="tech-news__button">
				<span>
					<span>
						<span>{prop.button}</span>
					</span>
				</span>
			</a>
		</div>
	);
}

export default Sidebar;