import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Project = () => {
  return (
     <>
        <Navbar/>
        <div className="flex justify-center items-center p-16 bg-black max-md:px-5">
          <div className="flex flex-col px-8 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
            <div className="flex justify-center items-center px-16 py-5 text-5xl tracking-tighter text-white whitespace-nowrap leading-[56.16px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
              <div className="flex gap-4 max-md:text-4xl">
                <div className="max-md:text-4xl">My</div>
                <div className="font-extrabold max-md:text-4xl">Projects</div>
              </div>
            </div>
            <div className="py-5 mt-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="grow w-full shadow-lg aspect-[1.33] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                    <div className="text-5xl font-extrabold tracking-tighter leading-[56.16px] max-md:max-w-full max-md:text-4xl">
                      01
                    </div>
                    <div className="mt-7 text-3xl font-bold tracking-tighter max-md:max-w-full">
                      Crypto Screener Application
                    </div>
                    <div className="mt-7 text-base tracking-wide leading-6 text-zinc-500 max-md:max-w-full">
                      I'm Flora Sheen Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to
                      specimen book.
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/59bbfba05b0d7c07a00c839ba6a74b4d796464e70dda779d6d2ac7c883c15396?"
                      className="mt-7 w-5 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="py-5 mt-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch mt-2 text-white max-md:mt-10 max-md:max-w-full">
                    <div className="text-5xl font-extrabold tracking-tighter leading-[56.16px] max-md:max-w-full max-md:text-4xl">
                      02
                    </div>
                    <div className="mt-7 text-3xl font-bold tracking-tighter leading-10 max-md:max-w-full">
                      Euphoria - Ecommerce (Apparels) Website Template
                    </div>
                    <div className="mt-7 text-base tracking-wide leading-6 text-zinc-500 max-md:max-w-full">
                      I'm Flora Sheen Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to
                      specimen book.
                      <br />
                      when an unknown printer took a galley of type and scrambled it
                      to specimen book.
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/59bbfba05b0d7c07a00c839ba6a74b4d796464e70dda779d6d2ac7c883c15396?"
                      className="mt-7 w-5 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="grow w-full shadow-lg aspect-[1.33] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
              </div>
            </div> */}
            {/* <div className="py-5 mt-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="grow w-full shadow-lg aspect-[1.33] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                    <div className="text-5xl font-extrabold tracking-tighter leading-[56.16px] max-md:max-w-full max-md:text-4xl">
                      03
                    </div>
                    <div className="mt-8 text-3xl font-bold tracking-tighter max-md:max-w-full">
                      Blog Website Template
                    </div>
                    <div className="mt-8 text-base tracking-wide leading-6 text-zinc-500 max-md:max-w-full">
                      I'm Flora Sheen Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to
                      specimen book.
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8ec29c10d9b985bdabfc7cc92e475f049f27f50d93e12069641d2df0134f1eb?"
                      className="mt-8 w-5 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Footer/>
      </>
  )
}

export default Project;