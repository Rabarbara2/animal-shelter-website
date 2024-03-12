import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import Image from "next/image";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Buttons from "./_components/buttons";

import MainPageAdopt from "./_components/main-page-adopt";

import NewsSection from "./_components/news-section";

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

        <div className="text-white">join us</div>
        <div className="text-white">news</div>
        <div className="text-white">sponsors</div>
        <div className="text-white">footer</div>
      </div>
    </main>
  );
}
