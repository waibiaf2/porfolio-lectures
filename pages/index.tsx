import type { NextPage } from 'next'
import Head from 'next/head'
import {Header} from "../Components/Header";
import {Hero} from "../Components/Hero";

const Home: NextPage = () => {
    return (
        <div className={"bg-[rgb(36,36,36)] text-white h-screen"} >
            <Head>
                <title>{`Andrew's Portfolio`}</title>
            </Head>
            
            <Header/>
            {/*Hero*/}
            <Hero/>
            {/*About*/}
            {/*Experience*/}
            {/*Sills*/}
            {/*Contact Me*/}
        </div>
    );
}

export default Home;
