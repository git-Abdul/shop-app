"use client"
import { Rays } from "./rays"

export function MainImg() {
  return (
    <>
      {/* Main heading and image */}
      <div className="flex flex-col md:flex-row justify-center items-center">
      <Rays className="hide-on-small" />
        <style jsx>{`
          @media (max-width: 768px) {
            .hide-on-small {
              display: none;
            }
          }
        `}</style>
        <p
          className="font-bridge font-bold text-black md:text-left text-center md:w-3/4 md:text-8xl text-5xl select-none md:ml-10"
          style={{ zIndex: -2 }}
        >
          Best In Style Collection For You
        </p>
        <img
          src="image.png"
          className="ml-auto mt-10"
          style={{ zIndex: -2, width: "100vh" }}
        />
      </div>
    </>
  )
}
