import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";
import kratos from '../public/kratos_geek.png'
import Link from 'next/link';
import { useState } from "react"; // import state
import Navbar from "components/Navbar"
import Projects from "components/Projects"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>AIAM2601</title>
        <meta name='description' content=''></meta>
        <link rel='icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" />
      </Head>

      <main className='bg-white'>

        <Navbar/>

        <div className='text-center'>
          <div className='mx-auto mt-3 w-80 h-80'>
            <Image src={kratos} className='rounded-full' />
          </div>
          
          <div id='IconsLinks' className=''>
          <a href='mailto:andres.aguilarfl@gmail.com' target="_blank"><i class="fa-regular p-6 fa-envelope mt-3 fa-3x "></i></a>
          <a href='https://www.linkedin.com/in/andres-aguilar-569319161/' target="_blank"><i class="fa-brands p-6 fa-linkedin  mt-3 fa-3x "></i></a>
          <a href='https://github.com/AIAM2601' target="_blank"><i class="fa-brands  p-6 fa-github  mt-3 fa-3x  "></i></a>
          </div>

          <div className='mt-1' id='AboutMe'>
            <div className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-white'>About</div>
            <div className='mt-1'>Welcome to my portfolio! I'm Andrés Aguilar, a Software Engineer! <br></br> I have a passion for learning new things and solving problems!</div>
          </div>
        </div>

        <div className='text-center mb-4 mt-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-white'>Skills</div>
        <div id='Skills' className=' flex items-center justify-center mt-1  '>  
          <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-0'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
              <span className='font-bold'>Programming Languages</span>
                <ul class="list-none">
                  <li>Python Django</li>
                  <li>JS HTML CSS Node.js React.js</li>
                  <li>C/C++</li> 
                  <li>C#</li> 
                </ul>
              </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
              <span className='font-bold'>Tools</span>
                <ul class="list-none">
                  <li>PostreSQL - MySQL - MongoDB</li>
                  <li>Unity</li>
                  <li>Blender</li> 
                  <li>Krita - Gimp</li> 
                  <li>Davinci Resolve</li> 
                </ul>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
                <span className='font-bold'>Languages</span>
                <ul class="list-none">
                  <li>English</li>
                  <li>Spanish</li>
                  <li>Portuguese</li> 
                </ul>
              </div>
            </div>
        </div>

        <div id='projects' className='text-center grid place-items-center'>
        <div className='mb-4 mt-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-white'>Projects</div>
        <Projects />
        </div>

        <div id='contact' className='text-center mb-12'>
        <div className='mb-4 mt-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-white'>Contact</div>
        <span>andres.aguilarfl@gmail.com</span>
        </div>

      </main>
    </div>

  )
}
