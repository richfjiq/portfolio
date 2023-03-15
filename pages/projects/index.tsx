import { FC } from 'react';

import styles from './index.module.css';
import { Navbar, ProjectItem } from '../../components';
import { projects } from '../../utils';

const Projects: FC = () => {
	return (
		<Navbar title="Projects">
			<div className={`max-w-[1240px] h-full flex flex-col mx-auto px-5 ${styles.container}`}>
				<h1 className="mt-5 pb-5 text-center">What I&apos;ve Built</h1>
				{projects.map((el, i) => {
					const odd = (i + 1) % 2 === 0;

					return (
						<ProjectItem
							key={el.title}
							title={el.title}
							image={el.imgUrl}
							urlDemo={el.demoUrl}
							urlCode={el.codeUrl}
							description={el.description}
							odd={odd}
						/>
					);
				})}
			</div>
		</Navbar>
	);
};

export default Projects;
