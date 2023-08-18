import React from "react";
import Image from "next/image";
import SocialMedia from "../public/socialMedia.png";

const ProjectsR = () => {
  return (
    <div className="flex flex-wrap justify-center mt-1">
      {/* Card 1 Social Media app */}
      <div className="flex-shrink-0">
        <div className=" max-w-sm sm-[330px] md-[350px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-[#0c4a6e] dark:border-gray-700 p-5">
          <a href="https://github.com/AIAM2601/SocialMedia" target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Social Media App
            </h5>
          </a>
          <Image width={330} src={SocialMedia} alt="Social Media App"></Image>
          <div className="mb-2 mt-2 dark:text-white">
            Python Django TailwindCSS <br></br> For More information click{" "}
            <strong>CODE</strong>
          </div>
          <a href="https://github.com/AIAM2601/SocialMedia" target="_blank">
            <button className="bg-transparent hover:bg-[#5085a1] text-black text-[18px] font-semibold  py-2 px-4 dark:text-white border-gray-200 rounded-sm hover:text-black">
              Code
            </button>
          </a>
          <a href="https://www.youtube.com/watch?v=SX5jV4jFd60" target="_blank">
            <button className="bg-transparent hover:bg-[#5085a1] text-black text-[18px] font-semibold py-2 px-4  hover:border-transparent rounded dark:text-white hover:text-black">
              Video
            </button>
          </a>
        </div>
      </div>
      {/* Card 2 La princesa de prusia */}
      <div className="flex-shrink-0">
        <div className=" max-w-sm sm-[330px] md-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-[#0c4a6e] dark:border-gray-700 p-5">
          <a href="https://www.youtube.com/embed/biiiKkNwj_M" target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Princess of Prussia
            </h5>
          </a>
          <iframe
            width="330"
            height="200"
            src="https://www.youtube.com/embed/biiiKkNwj_M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="dark:text-white">Video Game built with Unity (C#)</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsR;
