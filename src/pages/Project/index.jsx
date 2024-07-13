import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Project = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center p-16 bg-black max-md:px-5">
        <div className="flex flex-col px-8 w-full">
          <div className="flex justify-center items-center px-16 py-5 text-5xl tracking-tighter text-white whitespace-nowrap leading-[56.16px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
            <div className="flex gap-4 max-md:text-4xl">
              <div className="max-md:text-4xl">My</div>
              <div className="font-extrabold max-md:text-4xl">Projects</div>
            </div>
          </div>
          <div className="py-5 mt-5w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 w-full">
              <div className="flex flex-col lg:w-6/12 md:w-4/12  h-full border border-white mt-10">
                <a href="https://mutayloo.vercel.app/" target="_blank">
                  <img
                    src="/MutayLoo.png"
                    alt="mutayloo"
                    className="w-full h-full "
                  />
                </a>
              </div>
              <div className="flex flex-col ml-5 w-6/12 md:w-8/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                  <div className="mt-7 text-3xl font-bold tracking-tighter max-md:max-w-full">
                    Mutayloo Project E-Commerce
                  </div>
                  <div className="mt-7 text-base tracking-wide leading-6 text-zinc-500 max-md:max-w-full text-lg">
                    -Developed an E-commerce web Application Project following
                    the scrum methodology, divided into front-end using HTML,
                    Tailwind CSS, JavaScript, React with React-router and Axios
                    as the main dependency. In the back-end, it uses Node.js and
                    Express to manage the RESTful API and uses MongoDB as a
                    database.
                    <br />
                    -Developed soft skills such as time management, personal
                    responsibility, attention to detail, problem-solving, growth
                    mindset, communication, persistence, and teamwork.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
