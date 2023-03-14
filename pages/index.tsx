import styles from './index.module.css';
import { Navbar } from '../components';
import Link from 'next/link';

const Home = () => {
	return (
		<Navbar title="Front-End Developer">
			<div className={`px-5 min-[550px]:px-0 ${styles.container}`}>
				<div className={styles.headerTypingContainer}>
					<h1 className={`text-700 ${styles.headerTyping}`}>
						Hi, I&apos;m <span className={styles.nameText}>Ricardo</span>&nbsp;
					</h1>
				</div>
				<div className={styles.fadeInContainer}>
					<h2 className="text-700">A Full Stack Web Developer</h2>
					<p className="text-600 text-base min-[500px]:text-xl min-[600px]:text-2xl max-w-[90%] min-[450px]:max-w-[80%] min-[550px]:max-w-[60%]">
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
