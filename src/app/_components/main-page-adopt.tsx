import Image from "next/image";
import Link from "next/link";
import dog from "../assets/Adopt.jpg";
import cat from "../assets/placeholder.jpg";
import bird from "../assets/birb.jpg";

export default function MainPageAdopt() {
  return (
    <div className="w-5/6">
      <div className="mt-1 bg-pink-900 p-10 text-center text-5xl font-semibold leading-snug text-white">
        Who&apos;s gonna be your next friend?
      </div>
      <div className="flex  flex-row justify-center gap-12 bg-pink-900 p-6">
        <Link
          href={"/"}
          className="flex h-fit w-[30%] flex-col items-center rounded-xl bg-red-50 p-6 shadow hover:bg-white  hover:text-pink-700"
        >
          <div className="p-2 text-4xl font-semibold ">a Dog?</div>
          <Image
            src={dog}
            alt="animal"
            className="h-auto w-auto scale-95 rounded-xl"
          />
          <div className="mt-2 text-center text-zinc-800">
            Meet our lovely dogs and choose one to become your new best friend!
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex h-fit w-[30%] flex-col items-center rounded-xl bg-red-50 p-6 shadow hover:bg-white  hover:text-pink-700"
        >
          <div className="p-2 text-4xl font-semibold ">a Cat?</div>
          <Image
            src={cat}
            alt="animal"
            className="h-auto w-auto scale-95 rounded-xl"
          />
          <div className="mt-2 text-center text-zinc-800">
            Meet our lovely cats and choose one (or more!) to become your new
            best friend!
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex h-fit w-[30%] flex-col items-center rounded-xl bg-red-50 p-6 shadow hover:bg-white  hover:text-pink-700"
        >
          <div className="p-2 text-4xl font-semibold ">an other pet?</div>
          <Image
            src={bird}
            alt="animal"
            className="h-auto w-auto scale-95 rounded-xl"
          />
          <div className="mt-2 text-center text-zinc-800">
            Meet our lovely pets and choose one (or more!) to become your new
            best friend!
          </div>
        </Link>
      </div>
    </div>
  );
}
