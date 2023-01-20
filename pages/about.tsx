/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { FC } from 'react';

import { Navbar } from '../components';

const About: FC = () => {
	return (
		<Navbar title="About">
			<div>
				<div className="max-w-[1240px] text-center m-auto gap-8">
					<div className="px-10 pb-10 text-justify">
						<h1 className="pt-6 min-[420px]:py-5 text-center">Who I Am</h1>
						<p className="py-3 min-[420px]:py5 text-[#ffffff]-600 text-base min-[600px]:text-xl min-[800px]:text-2xl">
							Hi, I&apos;m Ricardo, a full-stack web developer. I have a degree as a chemical
							engineer. Since college, I&apos;ve always had a taste for programming; three years
							ago, I decided to take the developer path.
						</p>
						<p className="py-3 min-[420px]:py5 text-[#ffffff]-600 text-base min-[600px]:text-xl min-[800px]:text-2xl">
							I&apos;m enthusiastic about acquiring more knowledge and experience that will allow me
							to be a better web developer. If a problem arises and I don&apos;t know the answer,
							I&apos;m the type of person who will say I don&apos;t know the answer, but I guarantee
							you I&apos;ll do research and resolve the issue.
						</p>
						<p className="py-3 min-[420px]:py5 text-[#ffffff]-600 text-base min-[600px]:text-xl min-[800px]:text-2xl">
							I can work on web and mobile applications, building the front-end, performing the
							necessary code to make them work well, and making them responsive. As well I can work
							on the back-end, performing code for client-side and server-side.
						</p>
						<div className="py-3 min-[420px]:py5 ">
							<Link
								href="/projects"
								className="text-[#ffffff]-600 underline cursor-pointer text-base min-[420px]:text-2xl"
							>
								Check out some of what I can do.
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Navbar>
	);
};

export default About;
