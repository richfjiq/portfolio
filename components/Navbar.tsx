import React, { FC, ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

interface Props {
	children: ReactNode;
}

const Navbar: FC<Props> = ({ children }) => {
	const [nav, setNav] = useState(false);
	const { pathname } = useRouter();

	const activeLink = (link: string) => {
		if (link === pathname) {
			return 'ml-10 text-sm uppercase font-bold text-[#24305e]';
		} else {
			return 'ml-10 text-sm uppercase hover:border-b border-[#24305e]';
		}
	};

	const bgImage = () => {
		switch (pathname) {
			case '/':
				return 'flex flex-col items-center w-full h-[100vh] home';
			case '/about':
				return 'flex flex-col items-center w-full h-[100vh] about';
			default:
				return;
		}
	};

	const bgColor = () => {
		switch (pathname) {
			case '/':
				return 'bg-[#A8D0E6]/90';
			case '/about':
				return 'bg-[#49c5b6]/90';
			default:
				return;
		}
	};

	const toggleNavbar = () => {
		setNav((prev) => !prev);
	};

	return (
		<div className={bgImage()}>
			<div className={`flex items-center justify-center w-[100%] ${bgColor()}`}>
				<div className="flex justify-between items-center w-[100%] max-w-[1240px] px-4 2xl:px-16 pt-6 ">
					<Image
						src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672333574/skills/zudmjm7cmmpkklfqtvs0.png"
						alt="portfolio_logo"
						width={100}
						height={25}
					/>
					<div>
						<ul className="hidden md:flex">
							<Link className={activeLink('/')} href="/">
								Home
							</Link>
							<Link className={activeLink('/about')} href="/about">
								About
							</Link>
							<Link className={activeLink('/skills')} href="/skills">
								Skills
							</Link>
							<Link className={activeLink('/projects')} href="/projects">
								Projects
							</Link>
							<Link className={activeLink('/contact')} href="/contact">
								Contact
							</Link>
						</ul>
						<div onClick={toggleNavbar} className="md:hidden font-bold">
							<AiOutlineMenu size={30} />
						</div>
					</div>
				</div>
			</div>

			<div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-[100%] bg-[#24305e]/70' : ''}>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[55%] sm:w-[50%] h-[100%] bg-[#A8D0E6] py-10 px-6 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500 bg-[#24305e]/70'
					}
				>
					<div>
						<div className="flex w-full items-center justify-between ">
							<Image
								src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672333574/skills/zudmjm7cmmpkklfqtvs0.png"
								alt="logo"
								width={77}
								height={35}
							/>
							<div onClick={toggleNavbar} className="cursor-pointer rounded-full p-1 bg-[#ffffff]">
								<AiOutlineClose size={18} className="text-[#24305e]" />
							</div>
						</div>
						<div className="border-b border-[#ffffff]-300 mt-7" />
					</div>
					<div className="py-4">
						<ul className="uppercase  flex flex-col">
							<Link className="py-4 text-sm" href="/" onClick={() => setNav(!nav)}>
								Home
							</Link>
							<Link className="py-4 text-sm" href="/about" onClick={() => setNav(!nav)}>
								About
							</Link>
							<Link className="py-4 text-sm" href="/" onClick={() => setNav(!nav)}>
								Skills
							</Link>
							<Link className="py-4 text-sm" href="/" onClick={() => setNav(!nav)}>
								Projects
							</Link>
							<Link className="py-4 text-sm" href="/" onClick={() => setNav(!nav)}>
								Contact
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest ">Let&apos;s Connect</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaLinkedinIn />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaGithub />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<AiOutlineMail />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`w-[100%] flex flex-1 items-center justify-center ${bgColor()}`}>
				{children}
			</div>
		</div>
	);
};

export default Navbar;
