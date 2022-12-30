/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

const About: FC = () => {
	return (
		<div className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque
						massa. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Ac ut consequat semper
						viverra nam. Porttitor leo a diam sollicitudin tempor. Feugiat sed lectus vestibulum
						mattis ullamcorper.
					</p>
					<p className="py-2 text-gray-600">
						Risus at ultrices mi tempus imperdiet. Posuere morbi leo urna molestie at elementum.
						Euismod quis viverra nibh cras pulvinar. Nulla porttitor massa id neque aliquam
						vestibulum morbi. Metus dictum at tempor commodo ullamcorper. Vel pretium lectus quam id
						leo in vitae turpis massa. Nisi vitae suscipit tellus mauris. Arcu ac tortor dignissim
						convallis aenean et tortor at.{' '}
					</p>
					<p className="py-2 text-gray-600 underline cursor-pointer">
						Check out some of my latest projects.
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<img
						className="rounded-xl"
						src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
						alt="laptop"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
