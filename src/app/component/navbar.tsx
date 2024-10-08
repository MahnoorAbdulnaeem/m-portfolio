import Link from "next/link"
import React from "react"
import Image from "next/image"
import { FaCloudDownloadAlt } from "react-icons/fa";

import { Menu } from "lucide-react";


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"




const Navbar = () => {
    return (
        <div className="bg-white z-50 sticky top-0">
            <header className="text-gray-600 body-font">

                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center hidden md:flex">
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


                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center sm:flex md:hidden">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={require("../public/1.jpg")} alt="mahnoor" width={60} height={60} className="w-[60px]" />
                    </a>
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetTitle className="text-3xl font-semibold text-purple-600">
                                Menu
                            </SheetTitle>
                            <SheetHeader>
                                <p>
                                    <Link href="/" className="mr-5 hover:text-purple-900">HOME</Link>
                                    <br />
                                    <Link href="#about" className="mr-5 hover:text-purple-900">ABOUT</Link>
                                    <br />
                                    <Link href="#skills" className="mr-5 hover:text-purple-900">SKILLS</Link>
                                    <br />
                                    <Link href="#project" className="mr-5 hover:text-purple-900">PROJECTS</Link>
                                    <br />
                                    <Link href="#Contact" className="mr-5 hover:text-purple-900">CONTACT</Link>
                                </p>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
















