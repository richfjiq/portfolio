/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FC } from 'react';
import { GoCheck } from 'react-icons/go';

interface Props {
	title: string;
	imgUrl: string;
	description: string;
	technologies: string[];
	demoUrl: string;
	codeUrl: string;
}

const ProjectDetails: FC<Props> = ({
	title,
	imgUrl,
	description,
	technologies,
	demoUrl,
	codeUrl,
}) => {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<h1 className="mb-5">{title}</h1>
			<div className="grid grid-cols-12 max-w-[1240px]">
				<div className="col-start-2 col-span-10 min-[600px]:col-start-3 min-[600px]:col-span-8 min-[900px]:col-start-4 min-[900px]:col-span-6 border-2 rounded-lg">
					<img src={imgUrl} alt="sportika-images" className="overflow-hidden rounded-lg" />
				</div>
			</div>
			<div className="mt-5 grid grid-cols-12 max-w-[1240px] items-center">
				<div className="col-start-2 col-span-10 min-[600px]:col-start-2 min-[600px]:col-span-6 min-[900px]:col-start-3 min-[900px]:col-span-5 text-justify">
					<p className="text-lg">{description}</p>
					<div className="mt-5 col-start-8 col-span-4 min-[600px]:col-start-5 min-[600px]:col-span-4 hidden min-[600px]:flex flex-col min-[600px]:flex-row items-center justify-around">
						<a
							href={demoUrl}
							target="_blank"
							rel="noreferrer"
							className="rounded-lg px-4 py-2 bg-white/70 text-[#DF6C4F] font-bold hover:bg-white hover:scale-105 ease-in duration-300"
						>
							DEMO
						</a>
						<a
							href={codeUrl}
							target="_blank"
							rel="noreferrer"
							className="rounded-lg px-4 py-2 bg-white/70 text-[#DF6C4F] font-bold hover:bg-white hover:scale-105 ease-in duration-300"
						>
							CODE
						</a>
					</div>
				</div>
				<div className="text-[#DF6C4F] hidden min-[600px]:block col-start-9 col-span-3 min-[900px]:col-start-9 min-[900px]:col-span-2 rounded-lg bg-[#fff]/80 p-2 hover:scale-105 hover:bg-[#fff] ease-in duration-300 shadow-lg shadow-[#fff]-400">
					<div className="items-center text-center">
						<h3>Technologies</h3>
						{technologies.map((val) => (
							<div key={val} className="flex flex-row items-center mt-2">
								<GoCheck className="mr-2" />
								<p>{val}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="mt-5 min-[600px]:mt-0 grid grid-cols-12 max-w-[1240px] w-full">
				<div className="text-[#DF6C4F] min-[600px]:hidden col-start-3 col-span-5 min-[450px]:col-start-3 min-[450px]:col-span-4 min-[600px]:col-start-9 min-[600px]:col-span-3 min-[900px]:col-start-9 min-[900px]:col-span-2 rounded-lg bg-[#fff]/80 p-2 hover:scale-105 hover:bg-[#fff] ease-in duration-300 shadow-lg shadow-[#fff]-400">
					<div className="items-center text-center">
						<h3>Technologies</h3>
						{technologies.map((val) => (
							<div key={val} className="flex flex-row items-center mt-2">
								<GoCheck className="mr-2" />
								<p>{val}</p>
							</div>
						))}
					</div>
				</div>
				<div className="col-start-8 col-span-4 min-[600px]:col-start-5 min-[600px]:col-span-4 flex min-[600px]:hidden flex-col min-[600px]:flex-row items-center justify-around">
					<a
						href={demoUrl}
						target="_blank"
						rel="noreferrer"
						className="rounded-lg px-4 py-2 bg-white/70 text-[#DF6C4F] font-bold hover:bg-white hover:scale-105 ease-in duration-300"
					>
						DEMO
					</a>
					<a
						href={codeUrl}
						target="_blank"
						rel="noreferrer"
						className="rounded-lg px-4 py-2 bg-white/70 text-[#DF6C4F] font-bold hover:bg-white hover:scale-105 ease-in duration-300"
					>
						CODE
					</a>
				</div>
			</div>
			<div className="grid grid-cols-12 max-w-[1240px] w-full mt-10">
				<Link
					className="col-start-2 col-span-2 min-[600px]:col-start-2 min-[600px]:col-span-1 text-lg text-center text-[#DF6C4F] rounded-md bg-white/70 hover:bg-white hover:scale-105 ease-in duration-300"
					href="/projects"
				>
					Back
				</Link>
			</div>
		</div>
	);
};

export default ProjectDetails;
