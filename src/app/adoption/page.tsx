import Link from "next/link";
import Navbar from "../_components/navbar";

export default async function Adoption() {
  return (
    <main className="flex min-h-screen justify-center bg-zinc-900">
      <Navbar />
      <div className="min-h-screen w-5/6 bg-pink-900">
        <Link href={"/adoption/dogs"}>woof</Link>
        <Link href={"/adoption/cats"}>meow</Link>
        <Link href={"/adoption/others"}>grrru?</Link>
      </div>
    </main>
  );
}
