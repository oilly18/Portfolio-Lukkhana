import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Skills = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-8 pb-5 text-xl tracking-tight leading-6 text-black whitespace-nowrap max-md:px-5">
        <div className="flex justify-center items-center px-16 py-5 text-5xl tracking-tighter leading-[56.16px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
          <div className="flex gap-4 max-md:text-4xl">
            <div className="max-md:text-4xl">My</div>
            <div className="font-extrabold max-md:text-4xl">Skills</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between py-5 mt-10 font-bold text-center capitalize max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/edabf841fbfddcb3a32017c3bc4d4e9b66ed5aa2e4c8e1b7da2ed331fe2169fe?"
              className="self-center w-full aspect-square"
            />
            <div className="mt-2">Git/GitHub</div>
          </div>
          <div className="flex flex-col justify-center p-6 text-black bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/javascript_logo_icon_145155.png"
              alt="่javascript"
              className="mt-4 w-4/5 h-4/5 pl-4"
            />
            <div className="mt-8">JavaScript</div>
          </div>
          <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/html-5-logo_icon-icons.com_73528.png"
              alt="html"
              className="mt-4 w-4/5 h-4/5 pl-4"
            />
            <div className="mt-4">HTML</div>
          </div>
          <div className="flex flex-col justify-center px-4 py-2 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/css_logo_icon_181257.png"
              alt="css"
              className="mt-4 w-full h-full pl-2"
            />
            <div className="pb-8">CSS</div>
          </div>
          <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/tailwind_icon_212720.png"
              alt="tailwind"
              className="mt-4 w-4/5 h-4/5 pl-4"
            />
            <div className="mt-8">Tailwind CSS</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between py-5 font-bold text-center capitalize max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/sql-document-outlined-interface-symbol_icon-icons.com_57504.png"
              alt="SQL"
              className="mt-4 w-4/5 h-4/5 pl-4"
            />
            <div className="mt-8">SQL</div>
          </div>
          <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/prog-nodejs02_icon-icons.com_50780.png"
              alt="nodejs"
              className="mt-4 w-4/5 h-4/5 pl-4"
            />
            <div className="mt-8">Node.js</div>
          </div>
          <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/express_original_logo_icon_146527.png"
              alt="express"
              className="mt-4 w-4/5 h-4/5 pl-4"
            />
            <div className="mt-8">Express</div>
          </div>
          <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/react_logo_icon_144942.png"
              alt="react"
              className="mt-4 w-4/5 h-4/5 pl-4"
            />
            <div className="mt-8">React</div>
          </div>
          <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/figma_logo_icon_173157.png"
              alt="figma"
              className="mt-4 w-4/5 h-4/5 pl-4"
            />
            <div className="mt-8">Figma</div>
          </div>
        </div>
        <div className="flex gap-28 justify-center py-5 font-bold text-center capitalize max-md:flex-wrap max-md:max-w-full">
          <div className="mr-4 flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/trello-black_100143.png"
              alt="trello"
              className="mt-4 w-4/5 h-4/5 pl-4"
            />
            <div className="mt-8">Trello</div>
          </div>
          <div className="mr-2 flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/postman_logo_icon_144970.png"
              alt="postman"
              className="mt-4 w-4/5 h-4/5 pl-4"
            />
            <div className="mt-8">Postman</div>
          </div>
          <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
            <img
              src="/mongodb_logo_icon_248434.png"
              alt="mongodb"
              className="mt-4 w-4/5 h-4/5 pl-4"
            />
            <div className="mt-8">MongoDB</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
