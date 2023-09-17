"use client"
import { Rays } from "./rays"

export function MainImg() {
  return (
    <>
      <div className="flex flex-col reverse md:flex-row justify-center items-center">
        <p
          className="font-bridge md:mb-0 mb-10 font-bold text-black md:text-left text-center md:w-3/4 md:text-8xl text-5xl select-none md:ml-10"
        >
          <Rays className="hide-on-small md:h-auto md:w-auto h-128 w-128" />
          Best In Style <span className="text-orange-300">Collection</span> For Everyone.
        </p>
        <div className="image-container md:mt-0 mt-5">
          <img src="image.png" alt="Image 1" />
          <img src="image2.png" alt="Image 2" />
          <img src="image3.png" alt="Image 3" />
        </div>
      </div>
      <hr className="w-48 md:hidden h-1 mx-auto my-1 bg-gray-400 border-0 rounded"></hr>
    </>
  )
}
