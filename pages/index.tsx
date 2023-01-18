import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsSkype, BsTwitter } from 'react-icons/bs';

import { Navbar } from '../components';

const Home = () => {
	return (
		<>
			<Navbar title="Front-End Developer">
				<div className="text-center">
					<h1 className="py-4 text-700">
						Hi, I&apos;m <span className="text-[#24305e]">Ricardo</span>
					</h1>
					<h1 className="py-4 text-700">A Full Stack Web Developer</h1>
					<p className="py-4 text-600 text-base min-[420px]:text-2xl max-w-[70%] m-auto">
						I&apos;m a developer capable to work on front-end web applications, back-end technology
						and mobile applications.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a href="https://github.com/richfjiq?tab=repositories" target="_blank" rel="noreferrer">
							<div className="bg-[#ffffff]/70 rounded-full shadow-lg shadow-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#ffffff] ease-in duration-300">
								<FaGithub className="text-[#24305e] text-xl" />
							</div>
						</a>
						<a href="mailto:rfjiq1986@gmail.com">
							<div className="bg-[#ffffff]/70 rounded-full shadow-lg shadow-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#ffffff] ease-in duration-300">
								<AiOutlineMail className="text-[#24305e] text-xl" />
							</div>
						</a>
						<a href="skype:live:.cid.612567d1033d66d2?chat">
							<div className="bg-[#ffffff]/70 rounded-full shadow-lg shadow-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#ffffff] ease-in duration-300">
								<BsSkype className="text-[#24305e] text-xl" />
							</div>
						</a>
						<a>
							<div className="bg-[#ffffff]/70 rounded-full shadow-lg shadow-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#ffffff] ease-in duration-300">
								<BsTwitter className="text-[#24305e] text-xl" />
							</div>
						</a>
					</div>
				</div>
			</Navbar>
		</>
	);
};

export default Home;
