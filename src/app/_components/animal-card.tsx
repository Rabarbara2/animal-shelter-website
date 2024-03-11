import Image from "next/image";
import adopt from "../assets/Adopt.jpg";

export default function AnimalCard() {
  return (
    <div className="flex h-fit w-1/3 flex-col items-center rounded-xl bg-red-50 p-6 shadow transition-colors duration-100 ease-in-out hover:bg-white">
      <Image src={adopt} alt="animal" className=" h-96 w-auto rounded-xl" />
      <div className="mt-2 text-xl font-semibold">Cloud</div>
      <div className="mt-4 text-center text-zinc-800">
        description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt
      </div>
    </div>
  );
}