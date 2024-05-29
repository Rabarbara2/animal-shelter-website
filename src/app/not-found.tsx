import Image from "next/image";
import obrazek from "./assets/404.jpg";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-900 text-white">
      <Image src={obrazek} alt="ups" />
      <Link href={"/"} className="hover:text-pink-400">
        Go back to main page
      </Link>
    </div>
  );
}
