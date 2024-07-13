import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const About = () => {
  return (
    <>
        <Navbar/>
        <div className="justify-between px-8 max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-20 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col px-16 pt-10 rounded-xl border-4 border-black border-solid max-md:px-5 max-md:max-w-full h-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/491ff0ca9e92e184cfb72f3052fa0f803bf38c615cf6390123b44c53a002115e?"
                  className="z-10 mr-6 mb-0 ml-20 w-3/5 aspect-[0.63] max-md:mx-2.5 max-md:mb-2.5 justify-center items-center"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col pb-8 mt-2.5 text-base tracking-wide leading-6 text-zinc-500 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-4 py-5 text-5xl tracking-tighter text-black whitespace-nowrap leading-[56.16px] max-md:flex-wrap max-md:text-4xl">
                <div className="max-md:text-4xl">About</div>
                <div className="font-extrabold max-md:max-w-full max-md:text-4xl">
                  Me
                </div>
              </div>
              <div className="mt-5 max-md:max-w-full text-lg">
              I have more than 14 years of experience in finance and banking. I want to learn new things. Furthermore, I want to develop myself and follow my dream of wanting to work in the tech field. And then this passion made me step out of my comfort zone. Step out to learn and apply my experience working in the tech field.
              </div>
              <div className="mt-5 max-md:max-w-full text-lg">
              In being able to join Generation's Bootcamp, I have learned many new things. I have developed myself in both hard and soft skills. And I think these things will help me work effectively in this line of work.
              </div>
              <div className="mt-5 max-md:max-w-full text-lg">
              This has been a challenge in my 43-years-old life. And I'm ready for this challenge. My new journey has begun.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About;