import { NavBar } from "@/components/navBar";
import { MainImg } from "@/components/mainImg";
import { FeaturesList } from "@/components/featuresList";
import { ShopView } from "@/components/shopView";

export default function Home() {
  return (
    <main className="select-none">
      <NavBar />
      <MainImg />
      <FeaturesList />
    </main>
  )
}
