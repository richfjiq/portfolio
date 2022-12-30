/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

import { Navbar } from '../components';

const About: FC = () => {
	return (
		<Navbar>
			<div>
				<div className="max-w-[80%] text-center m-auto gap-8">
					<div>
						<h1 className="pt-6 min-[420px]:py-5">Who I Am</h1>
						<p className="py-3 min-[420px]:py5 text-[#ffffff]-600 text-base min-[420px]:text-2xl">
							I graduated from university as a chemical engineer, I worked in the administration
							area of ​​a local company for 12 years. I took a few programming classes in college,
							ever since then I&apos;ve always had a taste for programming. After 12 years working
							in the administration area, I decided to take the developer path, so I learned to
							code.
						</p>
						<p className="py-3 min-[420px]:py5 text-[#ffffff]-600 text-base min-[420px]:text-2xl">
							I spent 3 years learning code, the last year I took some jobs, I applied my knowledge
							and I learned different skills. I worked on a fitness mobile application (React
							Native), on this app my job focused on the front-end and responsiveness. Another was a
							mobile application for a e-commerce (React Native), in which I built most of the
							front-end and I did some contributions on the back-end (NodeJs). In my last job I was
							part of a work team, I built the front-end and some functionality, and made the web
							app responsive.
						</p>
						<p className="py-3 min-[420px]:py5 text-[#ffffff]-600 underline cursor-pointer text-base min-[420px]:text-2xl">
							Check out some of what I can do.
						</p>
					</div>
				</div>
			</div>
		</Navbar>
	);
};

export default About;
