import { Navbar, ProjectItem } from '../../components';

const Projects = () => {
	return (
		<Navbar>
			<div className="flex flex-col max-w-[1240px] h-full px-4 pb-5 justify-center">
				<h2 className="py-5 text-center">What I&apos;ve Built</h2>
				<div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-10 pb-10 min-[800px]:pb-0">
					<ProjectItem
						title="Sportika"
						image="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672193619/sportika/atcsv9lccjvrwxcmznhw.png"
						url="/projects/sportika"
						technology="Next JS"
					/>

					<ProjectItem
						title="Sportika Mobile"
						image="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672197842/sportika/w6gfpfisv5d4saii9rmv.png"
						url="/projects/sportika_mobile"
						technology="React Native"
					/>

					<ProjectItem
						title="Sportika Server"
						image="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672195477/sportika/bhboaabz7keak9opmcvi.png"
						url="/projects/sportika_server"
						technology="Node.js"
					/>
				</div>
			</div>
		</Navbar>
	);
};

export default Projects;
