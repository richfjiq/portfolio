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
}

const ProjectItem: FC<Props> = ({ title, image, urlDemo, urlCode, description }) => {
	return (
		<div className={styles.container}>
			<div className={`py-5 ${styles.firstContainer}`}>
				<h2 className="text-center mb-5">{title}</h2>
				<p>{description}</p>
				<div className="flex justify-around mt-5">
					<Link href={urlDemo} className={styles.button}>
						<span className="span">Demo</span>
					</Link>
					<Link href={urlCode} className={styles.button}>
						<span className="span">Code</span>
					</Link>
				</div>
			</div>
			<div className={styles.secondContainer}>
				<img src={image} className={styles.image} alt="project_picture" />
			</div>
			{/* <div className="grid grid-cols-12">
				<img
					className="w-full h-[220px] min-[400px]:h-[270px] min-[500px]:h-[280px] object-cover col-start-1 col-span-12 min-[500px]:col-start-2 min-[500px]:col-span-10 min-[600px]:col-start-3 min-[600px]:col-span-8 min-[700px]:col-start-4 min-[700px]:col-span-6 min-[800px]:col-start-1 min-[800px]:col-span-12 min-[900px]:col-start-2 min-[900px]:col-span-10 min-[1050px]:col-start-3 min-[1050px]:col-span-8 rounded-xl group-hover:opacity-10 border-2"
					src={image}
					alt="sportika-images"
				/>
			</div>
			<div className="grid grid-cols-12">
				<div className="col-span-12 mt-2">
					<h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
					<p className="pb-2 pt-0 text-white text-center">{technology}</p>
				</div>
				<div className="col-start-4 col-span-6">
					<Link href={url}>
						<p className="text-center py-1 rounded-lg bg-white/50 hover:bg-white/80 text-gray-700 font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-300">
							More Info
						</p>
					</Link>
				</div>
			</div> */}
		</div>
	);
};

export default ProjectItem;
