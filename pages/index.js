import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import kratos from "../public/kratos_geek.png";
import Link from "next/link";
import { useState } from "react"; // import state
import Navbar from "components/Navbar";
import Projects from "components/Projects";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>AIAM2601</title>
        <meta name="description" content=""></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-..."
          crossorigin="anonymous"
        />
      </Head>

      <main className="bg-white dark:bg-[#0c4a6e]">
        <Navbar />

        <div className="text-center">
          <div className="mx-auto mt-3 lg:w-80 lg:h-80 md:w-80 md:h-80 sm:w-80 sm:h-80 min-[300px]:w-60 min-[300px]:h-60">
            <Image src={kratos} className="rounded-full" />
          </div>

          <div className="mt-3" id="AboutMe">
            <div className="mb-4 font-bold leading-none tracking-tight text-gray-900  min-[320px]:text-[28px] lg:text-[32px] dark:text-white">
              About
            </div>
            <div className="dark:text-white mt-1 text-[20px]">
              Welcome to my portfolio! I'm Andrés Aguilar, a Software Engineer!{" "}
              <br></br> I'm a <strong>full stack web developer</strong>, I have a passion for
              learning <br></br> new things and solving problems!
            </div>
          </div>
        </div>

        <div
          id="Skills"
          className="text-center mb-4 mt-4 font-bold leading-none tracking-tight text-gray-900 min-[320px]:text-[28px] lg:text-[32px] dark:text-white"
        >
          Skills
        </div>
        <div className=" flex items-center justify-center mt-1 text-[20px] ">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-0">
            <div class="dark:text-white max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
              <span className="font-bold">Programming Languages</span>
              <ul class="list-none">
                <li>Python Django</li>
                <li>Javascript Node.js</li>
                <li>Java</li>
                <li>HTML CSS React.js</li>
              </ul>
            </div>
            <div class="dark:text-white max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
              <span className="font-bold">Tools</span>
              <ul class="list-none">
                <li>PostreSQL - MySQL - MongoDB</li>
                <li>Wordpress</li>
                <li>Photoshop</li>
                <li>Figma</li>
                <li>Unity</li>
              </ul>
            </div>
            <div class="dark:text-white max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
              <span className="font-bold">Languages</span>
              <ul class="list-none">
                <li>English</li>
                <li>Spanish</li>
                <li>Portuguese</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="projects" className="text-center grid place-items-center">
          <div className="mb-6 mt-4  font-bold leading-none tracking-tight text-gray-900 min-[320px]:text-[28px] lg:text-[32px] dark:text-white">
            Personal Projects
          </div>
          <Projects />
        </div>

        <div id="contact" className="text-center py-1 pb-10">
          <div className="mb-4 mt-2 font-bold leading-none tracking-tight text-gray-900 min-[320px]:text-[28px] lg:text-[32px] dark:text-white">
            Contact
          </div>
          <p className="dark:text-white font-bold text-[20px] mb-1">
            For more information on other projects I've worked on please contact
            me
          </p>
          <span className="dark:text-white text-[20px]">
            andres.aguilarfl@gmail.com
          </span>

          <div id="IconsLinks" className="">
            <a href="mailto:andres.aguilarfl@gmail.com" target="_blank">
              <i class="fa-regular p-6 fa-envelope mt-3 fa-3x dark:[color:white] hover:[color:#0c4a6e] dark:hover:[color:#02141f]"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/andres-aguilar-569319161/"
              target="_blank"
            >
              <i class="fa-brands p-6 fa-linkedin  mt-3 fa-3x dark:[color:white] hover:[color:#0c4a6e] dark:hover:[color:#02141f]"></i>
            </a>
            <a href="https://github.com/AIAM2601" target="_blank">
              <i class="fa-brands  p-6 fa-github  mt-3 fa-3x dark:[color:white] hover:[color:#0c4a6e] dark:hover:[color:#02141f]"></i>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
