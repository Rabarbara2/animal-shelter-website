import obrazek from "../assets/animals.jpg";
import Navbar from "../_components/navbar";
import Image from "next/image";

export default async function Aboutus() {
  return (
    <div className="flex justify-center bg-zinc-800">
      <Navbar />
      <div className="relative flex w-5/6 flex-col items-center justify-center overflow-hidden">
        <Image src={obrazek} alt="hero" className="  brightness-[70%]" />
        <div className="absolute left-8 ">
          <div className="p-2 text-5xl font-semibold text-white drop-shadow-xl">
            We help animals
          </div>
          <div className="ml-10 p-4 text-lg text-white drop-shadow-lg">
            Animals are super cool in our opinion
          </div>
        </div>
      </div>
    </div>
  );
}
