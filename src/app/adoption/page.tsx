import Link from "next/link";
import Navbar from "../_components/navbar";

import doga from "../assets/Adopt.jpg";
import cata from "../assets/Vol.jpg";
import birda from "../assets/birb.jpg";
import Image from "next/image";

export default async function Adoption() {
  return (
    <main className="flex min-h-screen justify-center bg-zinc-900">
      <Navbar />

      <div className="flex min-h-screen w-5/6 flex-col items-center bg-pink-900">
        <div className="p-10 pt-48 text-white">
          <div className="text-4xl font-medium ">Adoption</div>
          <div className="pt-6">
            At Paws for a Cause, we believe that every animal deserves a loving
            home. Our adoption process is designed to ensure that our furry
            friends find the perfect match. Here are some tips to help you
            prepare for bringing a new pet into your life:
          </div>
        </div>

        <div className="grid w-11/12 grid-cols-3 grid-rows-2 rounded-xl bg-pink-950 p-4">
          <div className="p-6 text-white">
            <div className="text-2xl">Prepare Your Home</div>
            <div className="pt-4">
              Make sure your home is safe and comfortable for your new pet. This
              includes setting up a designated space, purchasing necessary
              supplies, and pet-proofing your living area.
            </div>
          </div>
          <div className="p-6 text-white">
            <div className="text-2xl">Establish a Routine</div>
            <div className="pt-4">
              Pets thrive on consistency. Develop a daily routine for feeding,
              exercise, and playtime to help your new furry friend feel
              comfortable and secure.
            </div>
          </div>
          <div className="p-6 text-white">
            <div className="text-2xl">Provide Enrichment</div>
            <div className="pt-4">
              Keeping your pet mentally and physically stimulated is crucial for
              their well-being. Provide toys, puzzles, and opportunities for
              exploration to prevent boredom and destructive behavior.
            </div>
          </div>
          <div className="p-6 text-white">
            <div className="text-2xl">Seek Veterinary Care</div>
            <div className="pt-4">
              Regular check-ups, vaccinations, and preventative care are
              essential for your pet&apos;s health. Work with a trusted
              veterinarian to ensure your new companion receives the best
              possible care.
            </div>
          </div>
          <div className="p-6 text-white">
            <div className="text-2xl">Train and Socialize</div>
            <div className="pt-4">
              Training and socialization help your pet develop good behaviors
              and adapt to their new environment. Invest time in positive
              reinforcement training and expose your pet to new experiences
              gradually.
            </div>
          </div>
          <div className="p-6 text-white">
            <div className="text-2xl">Be Patient and Loving</div>
            <div className="pt-4">
              Bringing a new pet into your home is a big adjustment for both you
              and your furry friend. Be patient, understanding, and shower your
              new companion with love and affection as they settle in.
            </div>
          </div>
        </div>

        <div className="w-full p-10 text-4xl font-medium text-white">
          See the animals currently available for adoption:
        </div>

        <div className="flex  flex-row justify-center gap-12 p-6 pb-14">
          <Link
            href={"/adoption/dogs"}
            className="flex h-fit w-[30%] flex-col items-center rounded-xl bg-red-50 p-6 shadow hover:bg-white  hover:text-pink-700"
          >
            <div className="p-2 text-3xl font-semibold ">Dogs</div>
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
            <div className="p-2 text-3xl font-semibold ">Cats</div>
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
            <div className="p-2 text-3xl font-semibold ">Other pets</div>
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
