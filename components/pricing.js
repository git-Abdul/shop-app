import { Button } from "@/components/ui/button"

export function Pricing() {
    return (
        <>
            <h1 className="select-none text-center text-4xl mt-32 md:-mb-7 mb-10 font-bold text-black">Plans and Pricing</h1>
            <section className="select-none min-h-screen w-full flex items-center justify-center">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
                        <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                            <div>
                                <h3 className="text-2xl font-bold text-center">Basic</h3>
                                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                                    <span className="text-4xl font-bold">$29</span>/ month
                                </div>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full mr-2 p-1">
                                            <svg
                                                className=" text-white text-xs"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        Monthly sneaker box delivered
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full mr-2 p-1">
                                            <svg
                                                className=" text-white text-xs"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        Upto 5% Off on all our products
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <Button className="w-full">Get Started</Button>
                            </div>
                        </div>
                        <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-red-400">
                            <div className="px-3 py-1 text-sm text-black bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                Popular
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-center">Pro</h3>
                                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                                    <span className="text-4xl font-bold">$59</span>/ month
                                </div>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full mr-2 p-1">
                                            <svg
                                                className=" text-white text-xs"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        Monthly sneaker box delivered
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full mr-2 p-1">
                                            <svg
                                                className=" text-white text-xs"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        Merchandise included
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full mr-2 p-1">
                                            <svg
                                                className=" text-white text-xs"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        Upto 10% Off on all our products
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <Button className="w-full text-black bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">Get Started</Button>
                            </div>
                        </div>
                        <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                            <div>
                                <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                                    <span className="text-4xl font-bold">$99</span>/ month
                                </div>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full mr-2 p-1">
                                            <svg
                                                className=" text-white text-xs"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        Monthly sneaker box delivered
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full mr-2 p-1">
                                            <svg
                                                className=" text-white text-xs"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        Merchandise included
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full mr-2 p-1">
                                            <svg
                                                className=" text-white text-xs"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        Upto 20% Off on all our products
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full mr-2 p-1">
                                            <svg
                                                className=" text-white text-xs"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        Sneaker Collaboration
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-500 rounded-full mr-2 p-1">
                                            <svg
                                                className=" text-white text-xs"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        Dedicated Support and Warranty
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <Button className="w-full">Get Started</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}