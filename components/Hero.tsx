/*React imports*/
import * as React from 'react';

/*Third party imports*/
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import {BackgroundCircles} from "./BackgroundCircles";
import Image from "next/future/image";

/*File Imports*/
import profilePic from '../public/images/waibi_andrew.jpg';

type Props = {

};
export const Hero = (props: Props) => {
	// @ts-ignore
	const {text,count} = useTypewriter({
		words: [
			"Hi, the Name's Andrew .F. Waibi",
			"Guy-who-loves-Coffee.tsx",
			"<ButLovesToCodeMore/>",
		],
		loop: true,
		delaySpeed: 2000
	});
	
	return (
		<div
			className={"h-screen flex flex-col space-y-8 item-center justify-center text-center overflow-hidden"}
		>
			<BackgroundCircles/>
			<Image
				className={"relative rounded-full mx-auto object-cover"}
				src={profilePic}
				alt="Andrew and Daphine's photo"
				height={115}/*
				width={100}*/
				// blurDataURL="data:..." automatically provided
				placeholder="blur" // Optional blur-up while loading
			/>
			<div>
				
				<h2 className={"text-sm uppercase text-gray-500 pb-2 tracking-[15px"}>
					Software Engineer
				</h2>
				<h1 className={"text-3xl lg:text-5xl font-semibold px-10 text-gray-500 pb-2 tracking-[15px"}>
					<span className={"mr-3"}>{text}</span>
					<Cursor />
				</h1>
			</div>
		</div>
	);
};
