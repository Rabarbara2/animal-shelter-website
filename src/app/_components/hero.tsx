import Image from "next/image";
import hero from "../assets/hero-placeholder.jpg";
import Triangle from "../assets/triangle";

export default function Hero() {
  return (
    <div className="relative flex w-5/6 flex-col items-center justify-center overflow-hidden">
      <Image src={hero} alt="hero" className="  brightness-[70%]" />
      <div className="absolute left-8 ">
        <div className="p-2 text-5xl font-semibold text-white drop-shadow-xl">
          You can help them
        </div>
        <div className="ml-10 p-4 text-lg text-white drop-shadow-lg">
          More than {213} pets already found a new home
        </div>
      </div>
      <Triangle className="absolute bottom-0 w-screen translate-y-[30px] rotate-180  fill-pink-900" />
    </div>
  );
}
