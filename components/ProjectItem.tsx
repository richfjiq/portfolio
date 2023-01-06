/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import Link from 'next/link';

interface Props {
	title: string;
	image: string;
	url: string;
	technology: string;
}

const ProjectItem: FC<Props> = ({ title, image, url, technology }) => {
	return (
		<div>
			<div className="grid grid-cols-12">
				<img
					className="col-start-2 col-span-10 min-[500px]:col-start-3 min-[500px]:col-span-8 rounded-xl group-hover:opacity-10 border-2"
					src={image}
					alt="sportika-images"
					style={{ width: '100%', height: '160px', objectFit: 'fill' }}
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
			</div>
		</div>
	);
};

export default ProjectItem;
