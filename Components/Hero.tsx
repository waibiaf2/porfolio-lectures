// @flow
import * as React from 'react';
import {useTypewriter, Cursor,Typewriter} from 'react-simple-typewriter';
import {BackgroundCircles} from "./BackgroundCircles";

type Props = {

};
export const Hero = (props: Props) => {
	// @ts-ignore

	const {text,count} = useTypewriter({
		words: [
			"Hi, the Name's Waibi Andrew Franklin",
			"Guy-who-loves-Coffee.tsx",
			"<ButLovesToCodeMore/>"
		],
		loop: true,
		delaySpeed: 2000
	});
	
	return (
		<div>
			<BackgroundCircles/>
			<h1>
				<span>{text}</span>
				<Cursor/>
			</h1>
		</div>
	);
};
