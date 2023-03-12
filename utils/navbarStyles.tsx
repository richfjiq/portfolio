export const bgImage = (pathname: string) => {
	switch (pathname) {
		case '/':
			return 'flex flex-col items-center w-full home';
		case '/about':
			return 'flex flex-col items-center w-full about';
		case '/skills':
			return 'flex flex-col items-center w-full skills';
		case '/projects':
			return 'flex flex-col items-center w-full projects';
		case '/projects/sportika':
		case '/projects/sportika_mobile':
		case '/projects/sportika_server':
		case '/projects/portfolio':
			return 'flex flex-col items-center w-full project';
		case '/contact':
			return 'flex flex-col items-center w-full contact';
		default:
			return '';
	}
};

export const bgColor = (pathname: string) => {
	switch (pathname) {
		case '/':
			return 'bg-[#2f3542]/90';
		case '/about':
			return 'bg-[#2f3542]/90';
		case '/skills':
			return 'bg-[#2f3542]/90';
		case '/projects':
		case '/projects/sportika':
		case '/projects/sportika_mobile':
		case '/projects/sportika_server':
		case '/projects/portfolio':
			return 'bg-[#2f3542]/90';
		case '/contact':
			return 'bg-[#2f3542]/90';
		default:
			return '';
	}
};

export const navbarColor = (pathname: string) => {
	switch (pathname) {
		case '/':
			return 'bg-[#2f3542]';
		case '/about':
			return 'bg-[#2f3542]';
		case '/skills':
			return 'bg-[#2f3542]';
		case '/projects':
		case '/projects/sportika':
		case '/projects/sportika_mobile':
		case '/projects/sportika_server':
		case '/projects/portfolio':
			return 'bg-[#2f3542]';
		case '/contact':
			return 'bg-[#2f3542]';
		default:
			return '';
	}
};
