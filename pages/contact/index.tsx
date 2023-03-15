import { FC } from 'react';
import Image from 'next/image';

import { Navbar } from '../../components';

const Contact: FC = () => {
	return (
		<Navbar title="Contact">
			<div className="max-w-[1240px] w-full flex flex-col items-center">
				<h1 className="mt-5 mb-20">Contact me...</h1>
				<div className="flex justify-between max-w-[90%] min-[600px]:max-w-[75%] min-[700px]:max-w-[50%] w-full">
					<a
						href="https://github.com/richfjiq"
						target="_blank"
						rel="noreferrer"
						className="bg-white/70 p-6 rounded-full cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300"
					>
						<Image
							src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672964598/skills/swsrbiagfojnbudtmea0.png"
							alt="html"
							width={35}
							height={35}
						/>
					</a>
					<a
						href="mailto:rfjiq1986@gmail.com"
						className="bg-white/70 p-6 rounded-full cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300"
					>
						<Image
							src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672950598/skills/ib62c9mgzvobwcymcy8g.png"
							alt="html"
							width={35}
							height={35}
						/>
					</a>
					<a
						href="skype:live:.cid.612567d1033d66d2?chat"
						className="bg-white/70 p-6 rounded-full cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300"
					>
						<Image
							src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672950598/skills/epp6mjrudqaguh3o65ur.png"
							alt="html"
							width={35}
							height={35}
						/>
					</a>
					<a
						className="bg-white/70 p-6 rounded-full cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300"
						href="https://twitter.com/ricardo_fs_dev"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672969346/skills/uze636gbumepaisnxhez.png"
							alt="html"
							width={35}
							height={35}
						/>
					</a>
				</div>
			</div>
		</Navbar>
	);
};

export default Contact;
