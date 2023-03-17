import { FC, useEffect, useRef, useState } from 'react';
import TagCloud from 'TagCloud';

const skills = [
	'HTML',
	'CSS',
	'JavaScript',
	'Node.Js',
	'TypeScript',
	'React',
	'React Native',
	'Next.js',
	'Redux Toolkit',
	'Material UI',
	'Tailwind CSS',
	'MongoDB',
];

const TextSphere: FC = () => {
	const isTagCloudLoaded = useRef<HTMLSpanElement>(null);
	const [radius, setRadius] = useState(0);

	const handleResize = (widthScreen: number) => {
		switch (true) {
			case widthScreen >= 1100:
				setRadius(210);
				break;
			case widthScreen >= 1000:
				setRadius(195);
				break;
			case widthScreen >= 900:
				setRadius(185);
				break;
			case widthScreen >= 800:
				setRadius(175);
				break;
			case widthScreen >= 700:
				setRadius(150);
				break;
			case widthScreen >= 400:
				setRadius(180);
				break;
			default:
				setRadius(150);
				break;
		}
	};

	useEffect(() => {
		handleResize(window.innerWidth);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', () => handleResize(window.innerWidth));
		return () => window.removeEventListener('resize', () => handleResize(window.innerWidth));
	}, []);

	useEffect(() => {
		const tag = TagCloud('.tagcloud', skills, {
			radius: radius,
			maxSpeed: 'normal',
			initSpeed: 'normal',
			keep: true,
		});

		return () => tag.destroy();
	}, [radius]);

	return (
		<>
			<div className="textSphere">
				<span
					ref={isTagCloudLoaded}
					className="tagcloud text-base min-[900px]:text-xl min-[1100px]:text-2xl"
				></span>
			</div>
		</>
	);
};

export default TextSphere;
