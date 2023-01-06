import React, { FC, ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { BsSkype, BsTwitter } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { activeLink, bgColor, bgImage, navbarColor } from '../utils';

interface Props {
	children: ReactNode;
}

const Navbar: FC<Props> = ({ children }) => {
	const [nav, setNav] = useState(false);
	const { pathname } = useRouter();

	const toggleNavbar = () => {
		setNav((prev) => !prev);
	};

	return (
		<div className={bgImage(pathname)}>
			<div className={`flex items-center justify-center w-[100%] ${bgColor(pathname)}`}>
				<div className="flex justify-between items-center w-[100%] max-w-[1240px] px-4 2xl:px-16 pt-6 ">
					<Image
						src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672333574/skills/zudmjm7cmmpkklfqtvs0.png"
						alt="portfolio_logo"
						width={100}
						height={25}
					/>
					<div>
						<ul className="hidden md:flex">
							<Link className={activeLink('/', pathname)} href="/">
								Home
							</Link>
							<Link className={activeLink('/about', pathname)} href="/about">
								About
							</Link>
							<Link className={activeLink('/skills', pathname)} href="/skills">
								Skills
							</Link>
							<Link className={activeLink('/projects', pathname)} href="/projects">
								Projects
							</Link>
							<Link className={activeLink('/contact', pathname)} href="/contact">
								Contact
							</Link>
						</ul>
						<div onClick={toggleNavbar} className="md:hidden font-bold">
							<AiOutlineMenu size={30} />
						</div>
					</div>
				</div>
			</div>

			<div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-[100%] bg-[#000]/50' : ''}>
				<div
					className={
						nav
							? `fixed left-0 top-0 w-[55%] min-[500px]:w-[45%] min-[600px]:w-[40%] h-[100%] ${navbarColor(
									pathname,
							  )} py-10 px-6 ease-in duration-500`
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500 bg-[#000]/50'
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
						<ul className="uppercase flex flex-col">
							<Link className="py-4 text-lg" href="/" onClick={() => setNav(!nav)}>
								Home
							</Link>
							<Link className="py-4 text-lg" href="/about" onClick={() => setNav(!nav)}>
								About
							</Link>
							<Link className="py-4 text-lg" href="/skills" onClick={() => setNav(!nav)}>
								Skills
							</Link>
							<Link className="py-4 text-lg" href="/projects" onClick={() => setNav(!nav)}>
								Projects
							</Link>
							<Link className="py-4 text-lg" href="/contact" onClick={() => setNav(!nav)}>
								Contact
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-lg">Let&apos;s Connect</p>
							<div className="flex items-center justify-between my-4 w-full min-[500px]:w-[90%] min-[600px]:w-[95%]">
								<div className="bg-[#ffffff]/70 hover:bg-white/90 rounded-full shadow-lg shadow-white-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaGithub className="text-[#24305e] text-lg" />
								</div>
								<div className="bg-[#ffffff]/70 hover:bg-white/90 rounded-full shadow-lg shadow-white-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<AiOutlineMail className="text-[#24305e] text-lg" />
								</div>
								<div className="bg-[#ffffff]/70 hover:bg-white/90 rounded-full shadow-lg shadow-white-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<BsSkype className="text-[#24305e] text-lg" />
								</div>
								<div className="bg-[#ffffff]/70 hover:bg-white/90 rounded-full shadow-lg shadow-white-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<BsTwitter className="text-[#24305e] text-lg" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`w-[100%] flex flex-1 items-center justify-center ${bgColor(pathname)}`}>
				{children}
			</div>
		</div>
	);
};

export default Navbar;
