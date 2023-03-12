import styles from './index.module.css';
import { Navbar } from '../components';
import Link from 'next/link';

const Home = () => {
	return (
		<Navbar title="Front-End Developer">
			<div className={styles.container}>
				<div className={styles.headerTypingContainer}>
					<h1 className={`text-700 ${styles.headerTyping}`}>
						Hi, I&apos;m <span className={styles.nameText}>Ricardo</span>
					</h1>
				</div>
				<div className={styles.fadeInContainer}>
					<h1 className="text-700">A Full Stack Web Developer</h1>
					<p className="text-600 text-base min-[420px]:text-2xl max-w-[60%]">
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
