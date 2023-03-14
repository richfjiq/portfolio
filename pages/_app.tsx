import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

import { PreLoader } from '../components';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	const [preloading, setPreloading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setPreloading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	return <>{!preloading ? <Component {...pageProps} /> : <PreLoader />}</>;
}
