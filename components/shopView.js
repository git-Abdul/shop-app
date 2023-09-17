import { Button } from "./ui/button";
import Link from "next/link";
import { Rays } from "./rays";

export function ShopView() {
  return (
    <>
      <Rays />
      <div className='mt-32 mb-10 flex flex-wrap justify-center gap-5'>
        <div className="bg-zinc-100 border border-zinc-300 p-3 md:m-0 m-5 w-128 rounded-lg flex flex-col md:flex-row items-center">
          <div className="w-48 h-54 flex-shrink-0 mb-4 md:mb-0">
            <img
              src="image.png"
              alt="p1"
              className="w-full h-full"
            />
          </div>
          <div className="md:w-3/4 mx-5">
            <p className="font-bridge font-bold text-black text-xl select-none">
              Classic Sneakers
            </p>
            <p className="text-gray-600 text-sm mt-2 mb-8 md:mb-0">
              These classic sneakers are perfect for any occasion. They are comfortable, stylish, and durable. Made with
              high-quality materials, they are designed to last.
            </p>
            <Link href={"/product001"}>
              <Button
                className="text-white text-sm mt-2"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-zinc-100 border border-zinc-300 p-3 md:m-0 m-5 w-128 rounded-lg flex flex-col md:flex-row items-center">
          <div className="w-48 h-54 flex-shrink-0 mb-4 md:mb-0">
            <img
              src="image.png"
              alt="p1"
              className="w-full h-full"
            />
          </div>
          <div className="md:w-3/4 mx-5">
            <p className="font-bridge font-bold text-black text-xl select-none">
              Classic Sneakers
            </p>
            <p className="text-gray-600 text-sm mt-2 mb-8 md:mb-0">
              These classic sneakers are perfect for any occasion. They are comfortable, stylish, and durable. Made with
              high-quality materials, they are designed to last.
            </p>
            <Link href={"/product001"}>
              <Button
                className="text-white text-sm mt-2"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-zinc-100 border border-zinc-300 p-3 md:m-0 m-5 w-128 rounded-lg flex flex-col md:flex-row items-center">
          <div className="w-48 h-54 flex-shrink-0 mb-4 md:mb-0">
            <img
              src="image.png"
              alt="p1"
              className="w-full h-full"
            />
          </div>
          <div className="md:w-3/4 mx-5">
            <p className="font-bridge font-bold text-black text-xl select-none">
              Classic Sneakers
            </p>
            <p className="text-gray-600 text-sm mt-2 mb-8 md:mb-0">
              These classic sneakers are perfect for any occasion. They are comfortable, stylish, and durable. Made with
              high-quality materials, they are designed to last.
            </p>
            <Link href={"/product001"}>
              <Button
                className="text-white text-sm mt-2"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-zinc-100 border border-zinc-300 p-3 md:m-0 m-5 w-128 rounded-lg flex flex-col md:flex-row items-center">
          <div className="w-48 h-54 flex-shrink-0 mb-4 md:mb-0">
            <img
              src="image.png"
              alt="p1"
              className="w-full h-full"
            />
          </div>
          <div className="md:w-3/4 mx-5">
            <p className="font-bridge font-bold text-black text-xl select-none">
              Classic Sneakers
            </p>
            <p className="text-gray-600 text-sm mt-2 mb-8 md:mb-0">
              These classic sneakers are perfect for any occasion. They are comfortable, stylish, and durable. Made with
              high-quality materials, they are designed to last.
            </p>
            <Link href={"/product001"}>
              <Button
                className="text-white text-sm mt-2"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-zinc-100 border border-zinc-300 p-3 md:m-0 m-5 w-128 rounded-lg flex flex-col md:flex-row items-center">
          <div className="w-48 h-54 flex-shrink-0 mb-4 md:mb-0">
            <img
              src="image.png"
              alt="p1"
              className="w-full h-full"
            />
          </div>
          <div className="md:w-3/4 mx-5">
            <p className="font-bridge font-bold text-black text-xl select-none">
              Classic Sneakers
            </p>
            <p className="text-gray-600 text-sm mt-2 mb-8 md:mb-0">
              These classic sneakers are perfect for any occasion. They are comfortable, stylish, and durable. Made with
              high-quality materials, they are designed to last.
            </p>
            <Link href={"/product001"}>
              <Button
                className="text-white text-sm mt-2"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-zinc-100 border border-zinc-300 p-3 md:m-0 m-5 w-128 rounded-lg flex flex-col md:flex-row items-center">
          <div className="w-48 h-54 flex-shrink-0 mb-4 md:mb-0">
            <img
              src="image.png"
              alt="p1"
              className="w-full h-full"
            />
          </div>
          <div className="md:w-3/4 mx-5">
            <p className="font-bridge font-bold text-black text-xl select-none">
              Classic Sneakers
            </p>
            <p className="text-gray-600 text-sm mt-2 mb-8 md:mb-0">
              These classic sneakers are perfect for any occasion. They are comfortable, stylish, and durable. Made with
              high-quality materials, they are designed to last.
            </p>
            <Link href={"/product001"}>
              <Button
                className="text-white text-sm mt-2"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
