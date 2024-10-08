"use client"

import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image ">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi I'm
                        <br className="hidden lg:inline-block" />
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'UI UX Designer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <div className="w-[100px] h-[2px] bg-purple-700"></div>
                    <p className="mb-8 leading-relaxed text-white font-semibold">
                        I'm Mahnoor a passionate frontend web developer with expertise in creating responsive and interactive websites  I specialize in HTML CSS JavaScript Typescript React Next.js and Tailwind CSS to build clean efficient and user-friendly interfaces My goal is to deliver high-quality web applications that offer seamless experiences and visually appealing designs
                    </p>
                    <div className="flex justify-center">
                        <Link href={"#skills"}>
                            <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                                SKILLS
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                     <Image
                        className="object-cover object-center rounded mx-auto"
                        alt="hero"
                        src={require("../public/5.jpg")} 
                    />
                </div>
            </div>
        </section>

    )
}

export default Hero;