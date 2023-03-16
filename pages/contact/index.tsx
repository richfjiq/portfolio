import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './contact.module.css';
import { Navbar } from '../../components';
import { formValidation } from '../../utils';

type FormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const Contact: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(formValidation),
	});

	const onSendMessage = ({ name, email, subject, message }: FormData) => {
		const body = {
			name,
			email,
			subject,
			message,
		};

		return body;
	};

	return (
		<Navbar title="Contact">
			<div className="max-w-[1240px] flex flex-col mx-auto">
				<h1 className="text-center mb-10 mt-5">Contact me</h1>
				<div className="flex w-full flex-col sm:flex-row">
					<form
						onSubmit={handleSubmit(onSendMessage)}
						className="w-[90%] border-2 rounded-lg sm:border-none mx-auto sm:w-[60%] flex flex-col py-10 sm:p-5 mb-10 sm:mb-0"
					>
						<div className="w-[90%] flex flex-col mx-auto">
							<div className="w-full flex flex-col justify-between mb-10">
								<input
									className="appearance-none font-medium rounded w-full py-2 px-2 border-2 text-[#2f3542] leading-tight focus:outline-none focus:bg-white focus:border-[#0984e3]"
									id="name"
									type="text"
									placeholder="Name"
									{...register('name')}
								/>
								{errors.name && (
									<p role="alert" className="text-sm text-[#e74c3c] mt-[3px] ml-1">
										{errors.name?.message}
									</p>
								)}
							</div>
							<div className="w-[100%] mb-10">
								<input
									className="appearance-none font-medium rounded w-full py-2 px-2 border-2 text-[#2f3542] leading-tight focus:outline-none focus:bg-white focus:border-[#0984e3] focus:border-2"
									id="email"
									type="text"
									placeholder="Email"
									{...register('email')}
								/>
								{errors.email && (
									<p role="alert" className="text-sm text-[#e74c3c] mt-[3px] ml-1">
										{errors.email?.message}
									</p>
								)}
							</div>
							<div className="w-[100%] mb-10">
								<input
									className="appearance-none font-medium rounded w-full py-2 px-2 border-2 text-[#2f3542] leading-tight focus:outline-none focus:bg-white focus:border-[#0984e3] focus:border-2"
									id="subject"
									type="text"
									placeholder="Subject"
									{...register('subject')}
								/>
								<p role="alert" className="text-sm text-[#e74c3c] mt-[3px] ml-1">
									{errors.subject?.message}
								</p>
							</div>
							<div className="w-[100%] mb-10">
								<textarea
									className="appearance-none rounded w-full py-2 px-2 border-2 text-[#2f3542] leading-tight focus:outline-none focus:bg-white focus:border-[#0984e3] focus:border-2"
									id="message"
									placeholder="Message"
									rows={5}
									{...register('message')}
								/>
								<p role="alert" className="text-sm text-[#e74c3c] mt-[3px] ml-1">
									{errors.message?.message}
								</p>
							</div>
							<div className="flex justify-center">
								<button type="submit" className={`${styles.button}`}>
									Send message
								</button>
							</div>
						</div>
					</form>
					<div className="w-[90%] mx-auto sm:w-[40%] p-5 flex flex-col">
						<div className="flex justify-center">
							<Link
								href="https://github.com/richfjiq"
								target="_blank"
								rel="noreferrer"
								className={`flex items-center ${styles.buttonLink}`}
							>
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672964598/skills/swsrbiagfojnbudtmea0.png"
									alt="html"
									width={35}
									height={35}
									className="mr-3"
								/>
								<p className="font-semibold text-[#2f3542]">Github</p>
							</Link>
						</div>

						<div className="flex justify-center">
							<Link
								href="mailto:rfjiq1986@gmail.com"
								className={`flex items-center ${styles.buttonLink}`}
							>
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672950598/skills/ib62c9mgzvobwcymcy8g.png"
									alt="html"
									width={35}
									height={35}
									className="mr-3"
								/>
								<p className="font-semibold text-[#2f3542]">Email</p>
							</Link>
						</div>

						<div className="flex justify-center">
							<Link
								href="skype:live:.cid.612567d1033d66d2?chat"
								className={`flex items-center ${styles.buttonLink}`}
							>
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672950598/skills/epp6mjrudqaguh3o65ur.png"
									alt="html"
									width={35}
									height={35}
									className="mr-3"
								/>
								<p className="font-semibold text-[#2f3542]">Skype</p>
							</Link>
						</div>

						<div className="flex justify-center">
							<Link
								href="https://twitter.com/ricardo_fs_dev"
								target="_blank"
								rel="noreferrer"
								className={`flex items-center ${styles.buttonLink}`}
							>
								<Image
									src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672969346/skills/uze636gbumepaisnxhez.png"
									alt="html"
									width={35}
									height={35}
									className="mr-3"
								/>
								<p className="font-semibold text-[#2f3542]">Twitter</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Navbar>
	);
};

export default Contact;
