import { Navbar, ProjectDetails } from '../../components';
import { projects } from '../../utils';

const Portfolio = () => {
	const { title, imgUrl, description, technologies, demoUrl, codeUrl } = projects[3];

	return (
		<Navbar>
			<ProjectDetails
				title={title}
				imgUrl={imgUrl}
				description={description}
				technologies={technologies}
				demoUrl={demoUrl}
				codeUrl={codeUrl}
			/>
		</Navbar>
	);
};

export default Portfolio;