import Image from "next/image";
import Link from "next/link";
import LogoHeader from "../assets/logo-header";
export default function Navbar() {
  return (
    <div className="absolute flex  h-32 w-5/6 items-center justify-between bg-zinc-900 opacity-80">
      <Link href="/" className=" flex items-center gap-4">
        <LogoHeader className="ml-5  h-24 w-auto" />
        <div>
          <div className=" text-2xl font-semibold text-white">
            Animal Shelter
          </div>
          <div className="ml-4 text-base font-light text-zinc-300">
            adopt a homeless pet
          </div>
        </div>
      </Link>
      <div className="flex justify-end gap-7  ">
        <Link
          href={""}
          className="flex h-fit px-1 text-lg font-medium text-white hover:text-pink-600 active:text-pink-700"
        >
          Adoption
        </Link>
        <Link
          href={""}
          className="flex h-fit px-1 text-lg font-medium text-white hover:text-pink-600 active:text-pink-700"
        >
          About Us
        </Link>
        <Link
          href={"https://zrzutka.pl/drugie-zycie-dla-malej"}
          className="mr-8 flex h-fit px-1 text-lg font-medium text-white hover:text-pink-600 active:text-pink-700"
        >
          Donate
        </Link>
      </div>
    </div>
  );
}
