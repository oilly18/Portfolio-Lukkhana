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
              <div className="flex flex-col px-16 pt-10 rounded-xl border-4 border-black border-solid max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/491ff0ca9e92e184cfb72f3052fa0f803bf38c615cf6390123b44c53a002115e?"
                  className="z-10 mr-6 mb-0 ml-6 w-full aspect-[0.63] max-md:mx-2.5 max-md:mb-2.5"
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
              <div className="mt-5 max-md:max-w-full">
                I'm a passionate, self-proclaimed designer who specializes in full
                stack development (React.js & Node.js). I am very enthusiastic
                about bringing the technical and visual aspects of digital
                products to life. User experience, pixel perfect design, and
                writing clear, readable, highly performant code matters to me.
              </div>
              <div className="mt-5 max-md:max-w-full">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </div>
              <div className="mt-5 max-md:max-w-full">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
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