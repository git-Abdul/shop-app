import { NavBar } from "@/components/navBar";
import { Rays } from "@/components/rays";
import { MainImg } from "@/components/mainImg";

export default function Home() {
  return (
    <main className="select-none">
      <Rays />
      <NavBar />
      <MainImg />
    </main>
  )
}
