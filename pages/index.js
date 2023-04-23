import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";
import kratos from '../public/kratos_geek.png'
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

        <nav class="bg-white py-4">
          <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center">
            <a href="#" class=" self-center text-3xl font-bold whitespace-nowrap dark:text-white md:p-0 text-gray-800 mr-8 ">Andrés Aguilar</a>
            <a href="#AboutMe" class="block text-2xl py-2 pl-3 pr-4 my-1 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ">About</a>
            <a href="#Skills" class="block text-2xl py-2 pl-3 pr-4 my-1 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
            <a href="#projects" class="block text-2xl py-2 pl-3 pr-4 my-1 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
            <a href="#contact" class="block text-2xl py-2 pl-3 pr-4 my-1 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </div>
        </nav>

        <div className='text-center'>
          <div className='mx-auto mt-3 w-80 h-80'>
            <Image src={kratos} className='rounded-full' />
          </div>
          
          <div id='IconsLinks' className=''>
          <a href='mailto:andres.aguilarfl@gmail.com' target="_blank"><i class="fa-regular mr-6 fa-envelope  mt-3 fa-4x "></i></a>
          <a href='https://www.linkedin.com/in/andres-aguilar-569319161/' target="_blank"><i class="fa-brands  mr-6 fa-linkedin  mt-3 fa-4x  "></i></a>
          <a href='https://github.com/AIAM2601' target="_blank"><i class="fa-brands  mr-6 fa-github  mt-3 fa-4x  "></i></a>
          </div>

          <div className='mt-1' id='AboutMe'>
            <div className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-white'>About</div>
            <div className='mt-1'>Welcome to my portfolio! I'm Andrés Aguilar, a Software Engineer! <br></br> I have a passion for learning new things and solving problems!</div>
          </div>
        </div>

        <div id='Skills' className='mt-1 text-center'>
        <div className='mb-4 mt-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-white'>Skills</div>
        <ul class="list-none">
          <li>Python Django</li>
          <li>JS HTML CSS Node.js React.js</li>
          <li>C/C++</li> 
          <li>C#</li> 
          <li>PostreSQL - MySQL - MongoDB</li>
        </ul>
        </div>

        <div id='projects' className='text-center'>
        <div className='mb-4 mt-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-white'>Projects</div>
        </div>

        <div id='contact' className='text-center'>
        <div className='mb-4 mt-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-white'>Contact</div>
        <span>andres.aguilarfl@gmail.com</span>
        </div>

      </main>
    </div>
  )
}
