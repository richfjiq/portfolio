import Link from 'next/link';
import React, { FC } from 'react';

import styles from './skills.module.css';
import { Navbar } from '../components';

const Skills: FC = () => {
	return (
		<Navbar title="Skills">
			<div className="max-w-[1240px] text-center mx-auto flex flex-col h-full">
				<div className="grid grid-cols-12">
					<div
						className={`col-start-2 col-span-10 min-[700px]:col-span-6 min-[700px]:ml-10 ${styles.experienceContainer}`}
					>
						<h1 className="text-center min-[700px]:text-left mb-5 mt-5 min-[700px]:mt-0">
							Skills & Experience
						</h1>
						<p className="py-5 text-justify text-[#f7f1e3]-600 text-base min-[700px]:text-left min-[800px]:text-xl">
							I&apos;ve worked for 15 months, as a freelancer remote front-end developer on some
							real-life projects.
						</p>
						<p className="text-[#f7f1e3]-600 text-justify min-[700px]:text-left text-base min-[800px]:text-xl">
							I&apos;ve been part of some teams, and my main tasks were working on the front end,
							creating responsive websites, applying functionality, and doing some collaborations on
							the back end.
						</p>
						<p className="py-5 text-justify min-[700px]:text-left text-[#f7f1e3]-600 text-base min-[800px]:text-xl">
							Interested in working together? Send me a message.
						</p>
					</div>
					<div
						className={`flex flex-col justify-center col-start-2 col-span-10 min-[700px]:col-span-6 min-[700px]:mr-10 min-[700px]:pl-10 ${styles.skillsContainer}`}
					>
						<div className={styles.skill}>
							<p className="font-semibold mb-2 text-base min-[800px]:text-xl">Front-end</p>
						</div>
						<div className={styles.skill}>
							<p className="font-semibold mb-2 text-base min-[800px]:text-xl">Back-end</p>
						</div>
						<div className={styles.skill}>
							<p className="font-semibold mb-2 text-base min-[800px]:text-xl">React</p>
						</div>
						<div className={styles.skill}>
							<p className="font-semibold mb-2 text-base min-[800px]:text-xl">React Native</p>
						</div>
						<div className={styles.skill}>
							<p className="font-semibold mb-2 text-base min-[800px]:text-xl">Node.js</p>
						</div>
						<div className={styles.skill}>
							<p className="font-semibold mb-2 text-base min-[800px]:text-xl">Next.js</p>
						</div>
					</div>
				</div>
				<div className={`flex justify-center mt-10 mb-14 min-[700px]:my-10 ${styles.btnContainer}`}>
					<Link href="/contact" className={`text-base min-[600px]:text-xl ${styles.button}`}>
						Contact me
					</Link>
				</div>
			</div>
		</Navbar>
	);
};

export default Skills;
