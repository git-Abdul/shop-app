"use client";
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <>
            {/* Navbar */}
            <nav className="item-blur border-b dark:border-zinc-800 border-gray-300 bg-fixed select-none fixed w-full top-0 z-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-6">
                    <Link href={"/"} className="flex items-center m-1">
                        <h1 className="uppercase text-4xl font-bebas font-bold">Kicks</h1>
                    </Link>
                    <button
                        onClick={toggleNav}
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isNavOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${isNavOpen ? "block" : "hidden"
                            } w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="flex flex-col font-poppins font-semibold p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <Link href={"/"}>
                                    <p
                                        className="block text-lg py-2 pl-3 pr-4 dark:text-white text-zinc-800 rounded md:bg-transparent md:p-0 ease-in duration-200 hover:gradient"
                                        aria-current="page"
                                    >
                                        Home
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/market"}>
                                    <p className="block text-lg py-2 pl-3 pr-4 dark:text-white text-zinc-800 rounded md:hover:bg-transparent md:border-0 ease-in duration-200 hover:gradient md:p-0 md:dark:hover:bg-transparent">
                                        Market
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#about"}>
                                    <p className="block text-lg py-2 pl-3 pr-4 dark:text-white text-zinc-800 rounded md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200 hover:gradient md:dark:hover:bg-transparent">
                                        Choose Us
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};
