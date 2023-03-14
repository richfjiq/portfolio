import { FC } from 'react';

import styles from './PreLoader.module.css';

const PreLoader: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.containerAnimation}>
				<span className={styles.span}></span>
				<span className={styles.span}></span>
				<span className={styles.span}></span>
				<span className={styles.span}></span>
			</div>
			<h1 className={styles.welcome}>Welcome</h1>
		</div>
	);
};

export default PreLoader;
