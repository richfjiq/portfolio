import React, { FC } from 'react';
import Image from 'next/image';

import { Navbar } from '../components';
import { skills } from '../utils';

const Skills: FC = () => {
	return (
		<Navbar>
			<div>
				<div className="max-w-[1240px] pb-10 sm:pb-0 text-center mx-auto flex flex-col h-full">
					<h2 className="p-4 sm:pb-10 sm:pt-0">Some of my skills...</h2>
					<div className="grid grid-cols-2 min-[440px]:grid-cols-3 gap-4 sm:gap-5 md:gap-10 px-5">
						{skills.map((skill) => (
							<div
								key={skill.title}
								className="bg-[#ffffff]/70 hover:bg-[#ffffff]/90  py-1 px-4 min-[440px]:px-2 min-[440px]:py-4 min-[520px]:p-5 min-[1240px]:py-7 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
							>
								<div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
									<div className="m-auto">
										<Image src={skill.imageUrl} alt="html" width={64} height={64} />
									</div>
									<div className="flex flex-col items-center justify-center mt-2 min-[440px]:mt-5 md:mt-0">
										<h3 className="text-[#374785] text-xl">{skill.title}</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Navbar>
	);
};

export default Skills;
