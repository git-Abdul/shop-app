import Link from "next/link"

export default function Footer() {
  return (
    <footer class="bg-zinc-200 rounded-lg shadow m-4">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href={"/"} class="hover:underline">Kicks™</Link>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href={"/"} class="mr-4 hover:underline md:mr-6 ">Home</Link>
          </li>
          <li>
            <Link href={"/shop"} class="mr-4 hover:underline md:mr-6">Shop</Link>
          </li>
          <li>
            <Link href={"/pricing"} class="mr-4 hover:underline md:mr-6">Pricing</Link>
          </li>
          <li>
            <a href={"/contact"} class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
