import Image from 'next/image';
import React from 'react';

const SportikaShop = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
					<Image
						className="absolute z-1"
						fill
						style={{ objectFit: 'cover' }}
						alt="sportika_shop"
						src="https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672193619/sportika/atcsv9lccjvrwxcmznhw.png"
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2"></div>
				</div>
			</div>
		</div>
	);
};

export default SportikaShop;
