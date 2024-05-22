import { unstable_noStore as noStore } from "next/cache";
import Buttons from "./_components/buttons";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";

import MainPageAdopt from "./_components/main-page-adopt";

import Footer from "./_components/footer";
import NewsSection from "./_components/news-section";

export default async function Home() {
  noStore();

  return (
    <main className=" min-h-screen bg-zinc-900">
      <div className=" flex flex-col items-center">
        <Navbar />
        <Hero />
        <Buttons />
        <MainPageAdopt />
        <NewsSection />
        <Footer />
      </div>
    </main>
  );
}
