import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CV from '../../assets/Lukkhana_Tipchainak_CV.pdf';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className="flex justify-center items-center p-16 max-md:px-5">
          <div className="justify-between px-8 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-40 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-4 text-5xl tracking-tighter text-black leading-[56.16px] max-md:flex-wrap max-md:text-4xl">
                    <div className="max-md:text-4xl">Hello I’am</div>
                    <div className="font-extrabold max-md:max-w-full max-md:text-4xl">
                      Lukkhana Tipchainak
                    </div>
                  </div>
                  <div className="flex gap-4 self-start mt-5 text-5xl font-extrabold tracking-tighter leading-[56.16px] max-md:flex-wrap max-md:text-4xl">
                    <div className="text-black max-md:text-4xl">
                      Software Tester
                    </div>
                    <div className="text-black max-md:text-4xl">
                      / QA
                    </div>
                  </div>
                  <div className="mt-8 text-base tracking-wide leading-6 text-zinc-700 max-md:max-w-full">
                    With over 14 years as a Credit Analyst, I bring strong
                    analytical thinking, problem-solving, and attention to detail
                    from the banking and finance sector. Recently, I’ve developed
                    proficiency in the MERN stack (MongoDB, Express.js, React,
                    Node.js) and software testing/QA. Known for my strong
                    communication and collaboration skills, I am eager to leverage
                    my industry expertise, technical skills, and software testing
                    knowledge to enhance software quality and performance in the
                    tech sector.
                  </div>
                  <div className="flex gap-4 justify-start items-start mt-4">
                      <div className="navbar-start font-bold flex gap-4 ">
                         <a className="btn bg-slate-300 border-2 border-black" target="_blank" href={CV}>Resume</a>
                         <div className="flex justify-start items-start p-4  h-12 border-black border-2 rounded hover:bg-slate-300">
                            <a href="https://www.linkedin.com/in/lukkhanat1/" target="_blank" ><FaLinkedin />
                            </a>
                         </div>
                         <div className="flex justify-start items-start p-4 h-12 rounded border-2 border-black border-solid hover:bg-slate-300">
                             <a href="https://github.com/oilly18" target="_blank"><FaGithub /></a>
                         </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/acd5d15a394b61df3913059aa3c4939b95faf7e202cab0b69a037fedc7b5e2cf?"
                  className="grow w-full aspect-[0.82] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </>  
  );
}

export default Home;