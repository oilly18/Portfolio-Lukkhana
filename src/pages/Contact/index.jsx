import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
        <>
          <Navbar/>
          <div className="flex justify-center items-center p-16 bg-white max-md:px-5">
            <div className="justify-between px-8 py-5 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch max-md:mt-5 max-md:max-w-full">
                    <form action="" >
                      <div className="justify-center mb-6 px-6 py-4 text-base tracking-tight rounded border border-black border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                        <input type="text" placeholder="Your name" required/>
                      </div>
                      <div className="justify-center mb-6 px-6 py-4 text-base tracking-tight rounded border border-black border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                        <input type="email" placeholder="Email" required />
                      </div>
                      <div className="justify-center mb-6 px-6 py-4 text-base tracking-tight rounded border border-black border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                        <input type="text" placeholder="Your website (If exists)" required  />
                      </div>
                      <div className="justify-center px-6 py-4 text-base tracking-tight rounded border border-black border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                        <input type="text" placeholder="How can I help?" required />
                      </div>
                    </form>
                    <div className="flex gap-5 pr-20 mt-5 max-md:flex-wrap max-md:pr-5">
                      <a href="https://www.gmail.com/lukkhanat1@gmail.com">
                        <button className="justify-center px-5 py-4 text-xl font-semibold tracking-wide leading-6 text-white bg-black rounded hover:bg-slate-700 ">
                          Get In Touch
                        </button>
                      </a>
                      <div className="flex justify-center items-center p-4 w-14 h-14 border-black border-2 rounded hover:bg-slate-300">
                        <a href="https://www.linkedin.com/in/lukkhanat1/" target="_blank" ><FaLinkedin />
                        </a>
                      </div>
                      <div className="flex justify-center items-center p-4 rounded border-2 border-black border-solid hover:bg-slate-300">
                        <a href="https://github.com/oilly18" target="_blank"><FaGithub /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center self-stretch py-16 text-5xl font-extrabold tracking-tighter leading-[56.16px] max-md:mt-5 max-md:max-w-full max-md:text-4xl">
                    <div className="flex gap-4 whitespace-nowrap max-md:flex-wrap max-md:text-4xl">
                      <div className="text-black max-md:text-4xl">Let’s</div>
                      <div className="text-black max-md:text-4xl">talk</div>
                      <div className="text-black max-md:text-4xl">for</div>
                    </div>
                    <div className="mt-3 text-black max-md:max-w-full max-md:text-4xl">
                      Something special
                    </div>
                    <div className="mt-10 text-3xl font-semibold tracking-tight leading-8 text-black max-md:max-w-full">
                      lukkhanat1@gmail.com
                    </div>
                    <div className="mt-4 text-3xl font-semibold tracking-tight leading-8 text-black max-md:max-w-full">
                      Tel.091-469-9338
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </>
  );
};

export default Contact;
