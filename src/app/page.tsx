import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import placeholder from "./assets/placeholder.jpg";
import Image from "next/image";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Buttons from "./_components/buttons";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className=" min-h-screen  bg-zinc-900">
      <div className=" flex flex-col items-center">
        <Navbar />
        <Hero />
        {
          //<Image src={placeholder} alt="cat" className="w-5/6"></Image>
        }

        <Buttons />
        <div className="text-white">animal gallery</div>
        <div className="text-white">join us</div>
        <div className="text-white">news</div>
        <div className="text-white">sponsors</div>
        <div className="text-white">footer</div>
      </div>
    </main>
  );
}
