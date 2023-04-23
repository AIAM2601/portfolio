import React from "react";
import Link from "next/link"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from "react"; // import state

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    const handleNav = () => {
      setIsNavOpen(!isNavOpen);
      console.log("clicked")
    }
    return (
        <nav class="bg-white py-4">
            <div class="max-w-screen-xl flex flex-wrap items-center sm:flex-row justify-center mx-auto p-4">
                <a href="https://aiam2601.github.io/portfolio/" className=" self-center font-bold whitespace-nowrap dark:text-white md:p-0  text-gray-800 mx-3 text-xs sm:text-base md:text-3xl  ">Andrés Aguilar</a>

                <div class=" hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        <Link href="#AboutMe"><li className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 " >About</li></Link>
                        <Link href="#Skills"><li className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</li></Link>
                        <Link href="#projects"><li className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</li></Link>
                        <Link href="#contact">  <li className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</li></Link>

                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25}/>
                </div>
                <div className={
                    isNavOpen
                    ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" 
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }>
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <div class="flex-col py-4">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 ">

                        <Link href="#AboutMe"><li onClick={() => setIsNavOpen(false)} className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 " >About</li></Link>
                        <Link href="#Skills"><li onClick={() => setIsNavOpen(false)} className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</li></Link>
                        <Link href="#projects"><li onClick={() => setIsNavOpen(false)} className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</li></Link>
                        <Link href="#contact">  <li onClick={() => setIsNavOpen(false)} className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</li></Link>

                    </ul>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;