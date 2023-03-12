import styles from './index.module.css';
import { Navbar } from '../components';
import Link from 'next/link';

const Home = () => {
	return (
		<Navbar title="Front-End Developer">
			<div>
				<div className="text-center flex flex-col h-full mx-auto">
					<h1 className="py-4 text-700">Hi, I&apos;m Ricardo</h1>
					<h1 className="py-4 text-700">A Full Stack Web Developer</h1>
					<p className="py-4 text-600 text-base min-[420px]:text-2xl max-w-[70%] m-auto">
						I love learning and creating web and mobile applications. I&apos;m a lifelong learner.
					</p>
					<div className={styles.btnContainer}>
						<Link className={styles.btnAboutMe} href="/about">
							More about me
						</Link>
					</div>
				</div>
			</div>
		</Navbar>
	);
};

export default Home;
