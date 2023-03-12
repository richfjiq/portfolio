export const activeLink = (link: string, pathname: string) => {
	if (link === '/projects' && pathname.includes('/projects'))
		return 'ml-10 text-xl uppercase font-bold text-[#DF6C4F]';
	if (link === pathname) {
		return 'ml-10 text-xl uppercase font-bold text-[#24305e]';
	} else {
		return 'ml-10 text-xl uppercase hover:border-b border-[#ffffff]';
	}
};

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
			return 'bg-[#49c5b6]/90';
		case '/skills':
			return 'bg-[#DF6C4F]/90';
		case '/projects':
		case '/projects/sportika':
		case '/projects/sportika_mobile':
		case '/projects/sportika_server':
		case '/projects/portfolio':
			return 'bg-[#374885]/90';
		case '/contact':
			return 'bg-[#b49718]/90';
		default:
			return '';
	}
};

export const navbarColor = (pathname: string) => {
	switch (pathname) {
		case '/':
			return 'bg-[#2f3542]';
		case '/about':
			return 'bg-[#49c5b6]';
		case '/skills':
			return 'bg-[#DF6C4F]';
		case '/projects':
		case '/projects/sportika':
		case '/projects/sportika_mobile':
		case '/projects/sportika_server':
		case '/projects/portfolio':
			return 'bg-[#374885]';
		case '/contact':
			return 'bg-[#b49718]';
		default:
			return '';
	}
};
