"use client"
import { Rays } from "./rays"

export function MainImg() {
  return (
    <>
      {/* Main heading and image */}
      <div className="flex flex-col reverse md:flex-row justify-center items-center">
        <Rays className="hide-on-small" />
        <style jsx>{`
          @media (max-width: 768px) {
            .hide-on-small {
              display: none;
            }
          }
        `}</style>
        <p
          className="font-bridge md:mb-0 mb-20 font-bold text-black md:text-left text-center md:w-3/4 md:text-8xl text-5xl select-none md:ml-10"
        >
          Best In Style <span className="text-orange-300">Collection</span> For Everyone.
        </p>
        <img
          src="image.png"
          className="ml-auto md:-mt-6 mt-10"
          style={{ width: "600px" }}
        />
      </div>
      <hr class="w-48 md:hidden h-1 mx-auto my-1 bg-gray-400 border-0 rounded"></hr>
    </>
  )
}
