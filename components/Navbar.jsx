import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react"; // import state
import Image from "next/image";
import kratos from "../public/kratos_geek.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log("clicked");
  };
  return (
    <nav className="dark:bg-[#0c4a6e]">
      <div className="flex flex-wrap items-center justify-evenly justify-items-center mx-auto p-4">
        <a
          href="https://aiam2601.github.io/portfolio/"
          className=" flex items-center font-bold  dark:text-white text-gray-800"
        >
          <Image
            src={kratos}
            className="rounded-full w-10 h-10 mr-2"
            alt="kratos Logo"
          ></Image>
          <span className="self-center font-bold whitespace-nowrap dark:text-white sm:text-[28px] md:text-[32px] lg:text-[32px] min-[320px]:text-[28px] ">
            Andrés Aguilar
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <Link href="#AboutMe">
              <li className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:[color:#126ca1] dark:hover:[color:#02141f] md:p-0 dark:text-white">
                About
              </li>
            </Link>
            <Link href="#Skills">
              <li className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:[color:#126ca1] dark:hover:[color:#02141f] md:p-0  dark:text-white">
                Skills
              </li>
            </Link>
            <Link href="#projects">
              <li className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:[color:#126ca1] dark:hover:[color:#02141f] md:p-0 dark:text-white">
                Projects
              </li>
            </Link>
            <Link href="#contact">
              {" "}
              <li className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:[color:#126ca1] dark:hover:[color:#02141f] md:p-0 dark:text-white">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <AiOutlineMenu className="dark:[color:white]" size={26} />
        </div>
        <div
          className={
            isNavOpen
              ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] dark:bg-[#0c4261] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose className="dark:[color:white]" size={26} />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 ">
              <Link href="#AboutMe">
                <li
                  onClick={() => setIsNavOpen(false)}
                  className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:p-0  "
                >
                  About
                </li>
              </Link>
              <Link href="#Skills">
                <li
                  onClick={() => setIsNavOpen(false)}
                  className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:p-0 "
                >
                  Skills
                </li>
              </Link>
              <Link href="#projects">
                <li
                  onClick={() => setIsNavOpen(false)}
                  className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:p-0 "
                >
                  Projects
                </li>
              </Link>
              <Link href="#contact">
                {" "}
                <li
                  onClick={() => setIsNavOpen(false)}
                  className="block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:p-0 "
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
