import { Navbar } from '../../components';

const Projects = () => {
	return (
		<Navbar title="Projects">
			<div className="max-w-[1240px] h-full flex flex-col mx-auto px-5">
				<h1 className="mt-14 pb-10 text-center">What I&apos;ve Built</h1>
				{/* <ProjectItem /> */}
				{/* <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-10 pb-10 min-[800px]:pb-0">
					<ProjectItem
						title="Sportika"
						image="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1674834192/sportika/v3ffvjmmv8f05r4jr80z.jpg"
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

					<ProjectItem
						title="Portfolio"
						image="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672968038/sportika/nkjbfrrpffxmxqykmp1p.png"
						url="/projects/portfolio"
						technology="Next.js"
					/>
				</div> */}
			</div>
		</Navbar>
	);
};

export default Projects;
