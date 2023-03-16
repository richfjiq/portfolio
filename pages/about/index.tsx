import Link from 'next/link';
import React, { FC } from 'react';

import styles from './about.module.css';
import { Navbar, TextSphere } from '../../components';

const About: FC = () => {
	return (
		<Navbar title="About">
			<div className="max-w-[1240px] m-auto gap-8">
				<div className={`flex justify-center ${styles.headerContainer}`}>
					<h1 className={`mb-5 mt-5 min-[500px]:mt-10 text-center`}>About me</h1>
				</div>
				<div className={`grid grid-cols-12 ${styles.container}`}>
					<div
						className={`col-start-2 col-span-10 min-[700px]:col-start-1 min-[700px]:pl-10 min-[700px]:col-span-6 flex flex-col justify-center`}
					>
						<p className="py-5 text-left text-[#f7f1e3]-600 text-base min-[700px]:text-left min-[700px]:text-xl">
							I&apos;m a full-stack junior developer. I&apos;m enthusiastic about acquiring more
							knowledge and experience that will allow me to be a better developer.
						</p>
						<p className="text-[#f7f1e3]-600 text-left min-[700px]:text-left text-base min-[700px]:text-xl">
							I&apos;m a well-organized person, problem solver, with high attention to detail.
						</p>
						<p className="py-5 text-left min-[700px]:text-left text-[#f7f1e3]-600 text-base min-[700px]:text-xl">
							Interested in the entire frontend spectrum, so the backend and working on ambitious
							projects with positive people.
						</p>
					</div>
					<div className="justify-center col-start-2 col-span-10 min-[700px]:col-start-7 min-[700px]:col-span-6 min-[700px]:pr-10 flex items-center min-[700px]:justify-end min-[1100px]:justify-center">
						<TextSphere />
					</div>
				</div>

				<div className={`mt-5 mb-14 min-[700px]:my-5 ${styles.btnContainer}`}>
					<Link
						href="/projects"
						className={`text-base min-[600px]:text-xl min-[1100px]:text-2xl ${styles.button}`}
					>
						Check my demos
					</Link>
				</div>
			</div>
		</Navbar>
	);
};

export default About;
