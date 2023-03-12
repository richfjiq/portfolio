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
