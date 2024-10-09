import Link from "next/link"
import React from "react"
import Image from "next/image"


import { Menu } from "lucide-react";


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"





//testing


const Navbar = () => {
    return (
        <div className="bg-white z-50 sticky top-0">
            <header className="text-gray-600 body-font">


                <div className="container mx-auto flex-wrap p-2 flex-col md:flex-row items-center hidden md:flex">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={require("../public/1.jpg")} alt="mahnoor" width={100} height={100} className="w-[100px]" />
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-purple-900">HOME</Link>
                        <Link href="#about" className="mr-5 hover:text-purple-900">ABOUT</Link>
                        <Link href="#skills" className="mr-5 hover:text-purple-900">SKILLS</Link>
                        <Link href="#project" className="mr-5 hover:text-purple-900">PROJECTS</Link>
                        <Link href="#Contact" className="mr-5 hover:text-purple-900">CONTACT</Link>
                    </nav>
                </div>


                <div className="container mx-auto flex flex-wrap p-2 flex-row items-center justify-between md:hidden">
                    <a className="flex title-font font-medium items-center text-gray-900">

                        <Image src={require("../public/1.jpg")} alt="mahnoor" width={70} height={70} className="w-[70px]" />
                    </a>
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="text-3xl font-semibold text-purple-600">
                                    Menu
                                </SheetTitle>
                                <div className="flex flex-col gap-4 mt-4">
                                    <Link href="/">
                                        <button className="w-full px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-800">
                                            HOME
                                        </button>
                                    </Link>
                                    <Link href="#about">
                                        <button className="w-full px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-800">
                                            ABOUT
                                        </button>
                                    </Link>
                                    <Link href="#skills">
                                        <button className="w-full px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-800">
                                            SKILLS
                                        </button>
                                    </Link>
                                    <Link href="#project">
                                        <button className="w-full px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-800">
                                            PROJECTS
                                        </button>
                                    </Link>
                                    <Link href="#Contact">
                                        <button className="w-full px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-800">
                                            CONTACT
                                        </button>
                                    </Link>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </div>
    );
};

export default Navbar;


