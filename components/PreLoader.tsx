import styles from './PreLoader.module.css';

const PreLoader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.containerAnimation}>
				<span className={styles.span}></span>
				<span className={styles.span}></span>
				<span className={styles.span}></span>
				<span className={styles.span}></span>
			</div>
		</div>
	);
};

export default PreLoader;
