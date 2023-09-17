import { MainImg } from "@/components/mainImg";
import { FeaturesList } from "@/components/featuresList";
import { ShopView } from "@/components/shopView";

export default function Home() {
  console.log("Server Refreshed: Success ✅")
  return (
    <main className="select-none">
      <MainImg />
      <FeaturesList />
    </main>
  )
}
