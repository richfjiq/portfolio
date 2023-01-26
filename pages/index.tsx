import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsSkype, BsTwitter } from 'react-icons/bs';

import { Navbar } from '../components';

const Home = () => {
	return (
		<Navbar title="Front-End Developer">
			<div>
				<div className="text-center flex flex-col h-full mx-auto">
					<h1 className="py-4 text-700">
						Hi, I&apos;m <span className="text-[#24305e]">Ricardo</span>
					</h1>
					<h1 className="py-4 text-700">A Full Stack Web Developer</h1>
					<p className="py-4 text-600 text-base min-[420px]:text-2xl max-w-[70%] m-auto">
						I love learning and creating web and mobile applications. I&apos;m a lifelong learner.
					</p>
					<div className="flex justify-around w-[330px] m-auto py-4">
						<a href="https://github.com/richfjiq" target="_blank" rel="noreferrer">
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
						<a href="https://twitter.com/ricardo_fs_dev" target="_blank" rel="noreferrer">
							<div className="bg-[#ffffff]/70 rounded-full shadow-lg shadow-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#ffffff] ease-in duration-300">
								<BsTwitter className="text-[#24305e] text-xl" />
							</div>
						</a>
					</div>
				</div>
			</div>
		</Navbar>
	);
};

export default Home;
