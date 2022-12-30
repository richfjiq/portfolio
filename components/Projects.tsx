import React, { FC } from 'react';
import ProjectItem from './ProjectItem';

const Projects: FC = () => {
	return (
		<div className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-6">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Sportika Shop"
						image="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672193619/sportika/atcsv9lccjvrwxcmznhw.png"
						url="/property"
						technology="Next JS"
					/>

					<ProjectItem
						title="Sportika Server"
						image="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672195477/sportika/bhboaabz7keak9opmcvi.png"
						url="/property"
						technology="Node.js"
					/>

					<ProjectItem
						title="Sportika Shop Mobile (ios)"
						image="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672197842/sportika/w6gfpfisv5d4saii9rmv.png"
						url="/property"
						technology="React Native"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
