// @flow 
import * as React from 'react';
import {motion} from 'framer-motion';

import Image from "next/future/image";
import profilePic2 from "../public/images/daphine_andrew.jpg";

const MotionImage = motion(Image)

type Props = {
    
};
export const About = (props: Props) => {
    return (
        <div
            className={"flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}
        >
            <h3 className={"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"}>About</h3
            >
             <motion.div
                initial={{
                    x:-200,
                    opacity:0
                }}
                transition={{
                    duration:1.2
                }}
                whileInView={{
                    x:0,
                    opacity:1
                }}
                viewport={{
                    once:true
                }}
                className={"-mb-20 md:mb-0 w-auto h-auto "}
            >
                <motion.Image
                    src={profilePic2}
                    alt={'Me and My wife'}
                    height={500}
                    className={"flex-shrink-0 w-56 h-56 md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] rounded-full md:rounded-lg  w-56 h-56 md:w-64 md:h-95 object-cover"}
                />
            </motion.div>

            <div className={"space-y-10 px-0 md:px-10"}>
                <h4 className={"text-3xl font-semibold"}>
                    Here is a <span className={"underline decoration-[#F7AB0A]/40"}>little</span> background
                </h4>
                <p className={"text-base"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt explicabo ipsam iure
                    laborum nihil nisi omnis placeat possimus quas qui quidem ratione rem, saepe similique sunt tempora
                    vitae voluptatum!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias atque aut, corporis est
                    expedita fugiat hic illum itaque magni officiis omnis quis quos repellendus totam ullam ut vel.
                </p>
            </div>

        </div>
    );
};