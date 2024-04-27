import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "~/server/auth";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Buttons from "./_components/buttons";

import MainPageAdopt from "./_components/main-page-adopt";

import NewsSection from "./_components/news-section";
import Footer from "./_components/footer";
import ImageTest from "./_components/image-test";

export default async function Home() {
  noStore();

  const session = await getServerAuthSession();

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
