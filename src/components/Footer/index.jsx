import React from 'react'


const Footer = () => {
  return (
    <div className="flex justify-center items-center px-16 py-6 text-white bg-black max-md:px-5">
      <div className="flex gap-5 justify-between px-8 w-full max-w-screen-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-3 my-auto text-xl font-bold tracking-tight leading-6 capitalize whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/214f2d89d196998714f01171f52066d524d1d35a8a8f2fa4fd1f609c1a3c674e?"
            className="shrink-0 w-10 aspect-square"
          />
          <div className="my-auto">Lukkhana</div>
        </div>
        <div className="flex flex-col text-base font-semibold tracking-tight text-right">
          <div>@ 2024 by Lukkhana Tipchainak</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;