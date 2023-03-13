/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { FC } from 'react';

import styles from './about.module.css';
import { Navbar } from '../components';

const About: FC = () => {
	return (
		<Navbar title="About">
			<div className="max-w-[1240px] text-center m-auto gap-8">
				<div className={`px-10 py-10 text-justify ${styles.container}`}>
					<h1 className="text-center mb-5">My, Myself & I</h1>
					<p className="py-5 text-[#f7f1e3]-600 text-base min-[600px]:text-xl min-[800px]:text-2xl">
						I&apos;m a full-stack web developer. I&apos;m enthusiastic about acquiring more
						knowledge and experience that will allow me to be a better web developer.
					</p>
					<p className="text-[#f7f1e3]-600 text-base min-[600px]:text-xl min-[800px]:text-2xl">
						I&apos;m a well-organized person, problem solver, with high attention to detail.
					</p>
					<p className="py-5 text-[#f7f1e3]-600 text-base min-[600px]:text-xl min-[800px]:text-2xl">
						Interested in the entire frontend spectrum, so the backend and working on ambitious
						projects with positive people.
					</p>
				</div>

				<div className={styles.btnContainer}>
					<Link
						href="/projects"
						className={`text-base min-[600px]:text-xl min-[800px]:text-2xl ${styles.button}`}
					>
						Check my demos
					</Link>
				</div>
			</div>
		</Navbar>
	);
};

export default About;
