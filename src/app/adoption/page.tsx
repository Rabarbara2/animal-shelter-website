import Link from "next/link";
import Navbar from "../_components/navbar";
import animals from "../assets/animals.jpg";
import cat from "../assets/cat_in_house.jpg";
import dog from "../assets/dow_in_house.jpg";

import doga from "../assets/Adopt.jpg";
import cata from "../assets/Vol.jpg";
import birda from "../assets/birb.jpg";
import Image from "next/image";
import MainPageAdopt from "../_components/main-page-adopt";
export default async function Adoption() {
  return (
    <main className="flex min-h-screen justify-center bg-zinc-900">
      <Navbar />
      <div className="flex min-h-screen w-5/6 flex-col items-center bg-pink-900">
        <div className="mt-44 justify-center p-2 text-5xl font-semibold text-white ">
          Are you considering becoming a proud pet owner?
        </div>
        <div className="p-2 text-xl font-medium text-white ">
          Here, we outline the steps you need to take to make that dream a
          reality.
        </div>
        <div className=" w-full p-8 text-left text-3xl font-medium text-white">
          Choose Your Perfect Companion!
        </div>
        <div className="w-5/6  text-left text-xl font-normal text-white">
          Decide what type of pet you&apos;re interested in - a dog, a cat, or
          something else entirely? Our shelter offers a diverse range of animals
          waiting for their forever homes. Whether you&apos;re drawn to the
          playful nature of a dog, the independent spirit of a cat, or perhaps
          something more unique, we&apos;re here to help you find the perfect
          match for your lifestyle and preferences.
        </div>
        <Image
          src={animals}
          alt={"animals"}
          className="m-6 h-96 w-auto rounded shadow"
        />
        <div className=" w-full p-8 text-left text-3xl font-medium text-white">
          Prepare your house!
        </div>
        <div className="w-5/6  text-left text-xl font-normal text-white">
          Prepare your home for your new pet&apos;s arrival. After all, you
          wouldn&apos;t want to move into an empty house. Ensure it&apos;s cozy
          and inviting, ready to welcome your furry companion with open arms.
        </div>
        <div className="flex w-5/6 flex-col items-center p-6">
          <div className=" flex flex-row items-center gap-6">
            <div className="flex-1 p-6 text-justify text-lg text-white">
              In a home, a cat requires essential provisions such as nutritious
              food, a constant supply of fresh water, designated resting areas,
              a clean litter box, stimulating toys for enrichment, and most
              importantly, affection and attention from their owner to thrive
              and feel secure in their environment.
            </div>
            <div className="flex-1 p-6">
              <Image src={cat} alt={"animals"} className="rounded shadow" />
            </div>
          </div>
          <div className=" flex flex-row items-center gap-4">
            <div className="flex-1 p-6">
              <Image src={dog} alt={"animals"} className="rounded shadow" />
            </div>
            <div className="w-1/2 flex-1 text-justify text-lg text-white">
              In a home environment, dogs rely on essential care including
              balanced nutrition, access to fresh water, comfortable resting
              areas, regular exercise routines, grooming for hygiene, and, most
              importantly, love and attention from their human caregivers to
              ensure their overall well-being and happiness.
            </div>
          </div>
        </div>

        <div className=" w-full p-8 text-left text-3xl font-medium text-white">
          See the animals currently available for adoption!
        </div>

        <div className="flex  flex-row justify-center gap-12 p-6 pb-14">
          <Link
            href={"/adoption/dogs"}
            className="flex h-fit w-[30%] flex-col items-center rounded-xl bg-red-50 p-6 shadow hover:bg-white  hover:text-pink-700"
          >
            <div className="p-2 text-4xl font-semibold ">Dogs</div>
            <Image
              src={doga}
              alt="animal"
              className="h-auto w-auto scale-95 rounded-xl"
            />
            <div className="mt-2 text-center text-zinc-800">
              Meet our lovely dogs and choose one to become your new best
              friend!
            </div>
          </Link>
          <Link
            href={"/adoption/cats"}
            className="flex h-fit w-[30%] flex-col items-center rounded-xl bg-red-50 p-6 shadow hover:bg-white  hover:text-pink-700"
          >
            <div className="p-2 text-4xl font-semibold ">Cats</div>
            <Image
              src={cata}
              alt="animal"
              className="h-auto w-auto scale-95 rounded-xl"
            />
            <div className="mt-2 text-center text-zinc-800">
              Meet our lovely cats and choose one (or more!) to become your new
              best friend!
            </div>
          </Link>
          <Link
            href={"/adoption/others"}
            className="flex h-fit w-[30%] flex-col items-center rounded-xl bg-red-50 p-6 shadow hover:bg-white  hover:text-pink-700"
          >
            <div className="p-2 text-4xl font-semibold ">Other pets</div>
            <Image
              src={birda}
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
    </main>
  );
}
