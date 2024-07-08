import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Skills = () => {
  return (
     <>
        <Navbar/>
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
                className="self-center w-14 aspect-square"
              />
              <div className="mt-8">Git/GitHub</div>
            </div>
            <div className="flex flex-col justify-center p-6 text-white bg-black rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8056065d2772d51669de712c3fda84e5eb06171379780a1571066355badd8837?"
                className="self-center w-14 aspect-square"
              />
              <div className="mt-8">javascript</div>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6481509c7f44a4086482ed3cede9569a56b3ab54f8c99d441dfc2294c85c97a0?"
                className="self-center w-14 aspect-square"
              />
              <div className="mt-8">Sass/scss</div>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0f5389d9f6d7bfc0198b19bbd61c88e265cc105dc1f83e393f30d41d510d3c6?"
                className="self-center w-14 aspect-square"
              />
              <div className="mt-8">Nest.Js</div>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e6c58efb3556c29b1917d9bc7ed93dfbdcbcb84cb35acee059c323d05d0bdf1?"
                className="self-center w-14 aspect-square"
              />
              <div className="mt-8">Storybook</div>
            </div>
          </div>
          <div className="flex gap-5 justify-between py-5 font-bold text-center capitalize max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d98acb6baec143d9416018b8488571b0707af4e8d277c6631477a1be07e7cc?"
                className="self-center w-14 aspect-square"
              />
              <div className="mt-8">Nest.Js</div>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a49b51349c526266f51fb14c644427501fe16e6ccbb06c8b7093ec8de574c3?"
                className="self-center w-14 aspect-square"
              />
              <div className="mt-8">Git</div>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e6c58efb3556c29b1917d9bc7ed93dfbdcbcb84cb35acee059c323d05d0bdf1?"
                className="self-center w-14 aspect-square"
              />
              <div className="mt-8">Storybook</div>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a977c154c140a51c98a903e8e7d820e8b73e0672f64a87168392b33fd301172d?"
                className="self-center w-14 aspect-square"
              />
              <div className="mt-8">Socket.io</div>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded border-2 border-black border-solid h-[186px] w-[186px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6481509c7f44a4086482ed3cede9569a56b3ab54f8c99d441dfc2294c85c97a0?"
                className="self-center w-14 aspect-square"
              />
              <div className="mt-8">Sass/scss</div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
  )
}

export default Skills;