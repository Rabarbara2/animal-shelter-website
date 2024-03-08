import Image from "next/image";
import adopt from "../assets/Foster.jpg";
import Link from "next/link";

export default function NewsCard() {
  return (
    <div className="relative flex h-fit w-5/6 flex-col gap-4 rounded-xl bg-red-50 p-6 shadow lg:flex-row lg:items-stretch">
      <Image
        src={adopt}
        alt="animal"
        className="h-96 w-auto rounded-xl object-cover object-top"
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-fit rounded bg-pink-950 p-2 text-base font-semibold text-white">
              Animal found
            </div>
            <div className="w-fit text-sm text-stone-600">06.10.2024</div>
          </div>
          <div className="text-justify text-lg text-zinc-800">
            description Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt description Lorem ipsum dolor sit
            amet, conse, sed do e jiwegii nin ienei nine iiusmod tempor
            incididunt
          </div>
        </div>
        <Link
          href={""}
          className="h-16 w-fit justify-center self-end rounded-xl bg-pink-950 p-5 text-center text-xl shadow"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
