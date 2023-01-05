/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { FC } from 'react';

import { Navbar } from '../components';

const About: FC = () => {
	return (
		<Navbar>
			<div>
				<div className="max-w-[1240px] text-center m-auto gap-8">
					<div className="px-10 pb-10 text-justify">
						<h1 className="pt-6 min-[420px]:py-5 text-center">Who I Am</h1>
						<p className="py-3 min-[420px]:py5 text-[#ffffff]-600 text-base min-[600px]:text-xl min-[800px]:text-2xl">
							Hi, I&apos;m Ricardo, a full stack web developer, I&apos;m able to work on building
							responsive front end web and mobile applications as back-end applications (NodeJs).
						</p>
						<p className="py-3 min-[420px]:py5 text-[#ffffff]-600 text-base min-[600px]:text-xl min-[800px]:text-2xl">
							I graduated from university as a chemical engineer, I worked in the administration
							area of ​​a local business for 12 years. I took a few programming classes in college,
							ever since then I&apos;ve always had a taste for programming. After 12 years working
							in the administration area, I decided to take the developer path.
						</p>
						<p className="py-3 min-[420px]:py5 text-[#ffffff]-600 text-base min-[600px]:text-xl min-[800px]:text-2xl">
							The last year I took some jobs as developer, I applied my knowledge and I learned
							different skills. I worked on a fitness mobile application (React Native), on this app
							my job focused on the front-end and responsiveness. Another was a mobile application
							for a e-commerce (React Native), in which I built most of the front-end and I did some
							contributions on the back-end (NodeJs). In my last job I was part of a work team, I
							built the front-end and some functionality, and made the web app responsive.
						</p>
						<Link
							href="/projects"
							className="py-3 min-[420px]:py5 text-[#ffffff]-600 underline cursor-pointer text-base min-[420px]:text-2xl"
						>
							Check out some of what I can do.
						</Link>
					</div>
				</div>
			</div>
		</Navbar>
	);
};

export default About;
