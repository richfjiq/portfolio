/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import Link from 'next/link';

import styles from './projectItem.module.css';

interface Props {
	title: string;
	image: string;
	urlDemo: string;
	urlCode: string;
	description: string;
	odd: boolean;
}

const ProjectItem: FC<Props> = ({ title, image, urlDemo, urlCode, description, odd }) => {
	return (
		<div
			className={`flex w-full items-center my-14 ${
				odd
					? 'flex-col-reverse min-[800px]:flex-row-reverse'
					: 'flex-col-reverse min-[800px]:flex-row'
			}`}
		>
			<div
				className={`py-5 w-[100%] min-[500px]:w-[90%] min-[800px]:w-[45%] ${styles.firstContainer}`}
			>
				<h2 className="text-center mb-5 text-xl min-[800px]:text-2xl">{title}</h2>
				<p className="text-left">{description}</p>
				<div className="flex justify-around mt-10">
					<Link href={urlDemo} target="_blank" className={styles.button}>
						<span className="span">Demo</span>
					</Link>
					<Link href={urlCode} target="_blank" className={styles.button}>
						<span className="span">Code</span>
					</Link>
				</div>
			</div>
			<div
				className={`mb-5 w-[100%] min-[800px]:mb-0 min-[600px]:w-[90%] min-[800px]:w-[55%] ${styles.secondContainer}`}
			>
				<img
					src={`./images/${image}.png`}
					className={odd ? styles.imageOdd : styles.image}
					alt="project_picture"
				/>
			</div>
		</div>
	);
};

export default ProjectItem;
