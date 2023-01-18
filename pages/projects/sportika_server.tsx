import { Navbar, ProjectDetails } from '../../components';
import { projects } from '../../utils';

const SportikaServer = () => {
	const { title, imgUrl, description, technologies, demoUrl, codeUrl } = projects[2];

	return (
		<Navbar title="Project">
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

export default SportikaServer;
