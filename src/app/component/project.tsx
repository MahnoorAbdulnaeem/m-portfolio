import Image from "next/image";
import React from "react";

const Project = () => {
    return (
        <div id="project">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-900">
                            My Projects
                        </h1>

                    </div>
                    <div className="flex flex-wrap -m-8">
                        {/* projects */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require(`../public/14.jpg`)}
                                />

                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                        PROJECT
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        CALCULATOR
                                    </h1>
                                    <p className="leading-relaxed">
                                        Built a functional Calculator using HTML CSS and JavaScript This project demonstrates my proficiency in front-end web development

                                    </p>
                                    {/* <Link href={}></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require(`../public/15.jpg`)}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                        PROJECT
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        LOGIN PAGE
                                    </h1>
                                    <p className="leading-relaxed">
                                        Built a functional Login page using HTML CSS and JavaScript This project demonstrates my proficiency in front-end web development

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require(`../public/16.jpg`)}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                        PROJECT
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        PORTFOLIO
                                    </h1>
                                    <p className="leading-relaxed">
                                        Built a functional Portfolio using HTML CSS and JavaScript This project demonstrates my proficiency in front-end web development

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center "
                                    src={require(`../public/17.jpg`)}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                        PROJECT
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        DISNEY GALLERY
                                    </h1>
                                    <p className="leading-relaxed">
                                        Built a functional Disney gallery using HTML CSS and JavaScript This project demonstrates my proficiency in front-end web development

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require(`../public/18.jpg`)}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                        PROJECT
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        WEBSITE PAGE
                                    </h1>
                                    <p className="leading-relaxed">
                                        Built a functional Website page using HTML CSS and JavaScript This project demonstrates my proficiency in front-end web development

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require(`../public/6.jpg`)}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                        PROJECT
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        RESUME BUILDER
                                    </h1>
                                    <p className="leading-relaxed">
                                        Built a functional Resume builder using HTML CSS and JavaScript This project demonstrates my proficiency in front-end web development

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require(`../public/22.jpg`)}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                        PROJECT
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        PICTURE SLIDER
                                    </h1>
                                    <p className="leading-relaxed">
                                        Built a functional Picture slider using HTML CSS and JavaScript This project demonstrates my proficiency in front-end web development

                                    </p>
                                </div>
                            </div>
                        </div>
                     <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={require(`../public/23.jpg`)}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                    PROJECT
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    CONTACT FORM
                                </h1>
                                <p className="leading-relaxed">
                                    Built a functional Contact form using HTML CSS and JavaScript This project demonstrates my proficiency in front-end web development

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={require(`../public/21.jpg`)}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                    PROJECT
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    TODO LIST
                                </h1>
                                <p className="leading-relaxed">
                                    Built a functional Todo list using HTML CSS and JavaScript This project demonstrates my proficiency in front-end web development

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={require(`../public/27.jpg`)}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                    TYPESCRIPT PROJECT
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    ATM
                                </h1>
                                <p className="leading-relaxed">
                                    Built a functional ATM using Typescript This project demonstrates my proficiency in front-end web development

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={require(`../public/26.jpg`)}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                    TYPESCRIPT PROJECT
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    OPP BANK
                                </h1>
                                <p className="leading-relaxed">
                                    Built a functional Opp bank using Typescript This project demonstrates my proficiency in front-end web development

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={require(`../public/25.jpg`)}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                    TYPESCRIPT PROJECT
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    QUIZ SYSTEM
                                </h1>
                                <p className="leading-relaxed">
                                    Built a functional Quiz system using Typescript This project demonstrates my proficiency in front-end web development

                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={require(`../public/34.jpg`)}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                    NEXT.JS PROJECT
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    GIAIC CARD
                                </h1>
                                <p className="leading-relaxed">
                                    Built a functional Giaic Card using Next.js  This project demonstrates my proficiency in front-end web development

                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={require(`../public/35.jpg`)}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                    NEXT.JS PROJECT
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    TODO LIST
                                </h1>
                                <p className="leading-relaxed">
                                    Built a functional Todo List using Next.js This project demonstrates my proficiency in front-end web development

                                </p>
                            </div>
                        </div>
                    </div>





                    {/* <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={require(`../public/25.jpg`)}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                    NEXT.JS PROJECT
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    COUNTDOWN TIMER
                                </h1>
                                <p className="leading-relaxed">
                                    Built a functional Countdown Timer using Typescript This project demonstrates my proficiency in front-end web development

                                </p>
                            </div>
                        </div>
                    </div> */}



                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project;  
