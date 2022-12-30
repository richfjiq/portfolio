import Image from 'next/image';
import React, { FC } from 'react';

const Skills: FC = () => {
	return (
		<div className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672159707/skills/ygp0m6lu1ilgohffgtwz.png"
									alt="html"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672159706/skills/li01y5hppksjxh3rqaud.png"
									alt="html"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>CSS</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672159706/skills/xghjhfmpdid9w0rqyd5z.png"
									alt="html"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672159706/skills/s5igq3dfocm3ropkv9vm.png"
									alt="html"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Node.js</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672159707/skills/xmzb2jjuaxj2lbzrs7oj.png"
									alt="html"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>TypeScript</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672159706/skills/jxqftjov68ya7wtgcqsu.png"
									alt="html"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>React</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672159706/skills/jxqftjov68ya7wtgcqsu.png"
									alt="html"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>React Native</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672159706/skills/d1zyzf7hi86mdnjr7yfg.png"
									alt="html"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Next.js</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
