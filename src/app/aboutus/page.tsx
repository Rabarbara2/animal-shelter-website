export const dynamic = "force-dynamic";
import Image from "next/image";
import Navbar from "../_components/navbar";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

import Link from "next/link";
import adopt from "../assets/Adopt.jpg";
import donate from "../assets/Donate.jpg";
import foster from "../assets/Foster.jpg";
import vol from "../assets/Vol.jpg";
import Footer from "../_components/footer";

const items = [
  {
    image: adopt,
    text: "Meet our wonderful animals and get a new amazing friend today!",
    link: "/adoption",
    title: "Adopt",
  },
  {
    image: foster,
    text: "By opening your home, you can change animal's life while they await their forever home.",
    link: "/foster",
    title: "Foster",
  },
  {
    image: vol,
    text: "Do you love animals? We too! Come and help us grant them a better life they deserve.",
    link: "/volunteer",
    title: "Volunteer",
  },
  {
    image: donate,
    text: "Our animals need food, meds, toys and much more. We need funds to get them those things.",
    link: "https://zrzutka.pl/drugie-zycie-dla-malej",
    title: "Donate",
  },
];

export default async function Aboutus() {
  return (
    <div className="flex flex-col items-center bg-zinc-800">
      <Navbar />
      <div className=" relative flex w-5/6 flex-col items-center justify-center overflow-hidden bg-pink-900 pt-32">
        <div className="  p-12 text-3xl font-medium text-white">
          About Us
          <div className="pt-6 text-lg font-normal">
            Paws for a Cause is a non-profit animal shelter dedicated to
            rescuing and rehoming abandoned and neglected pets. Our mission is
            to provide a safe and loving environment for these animals while
            working to find them forever homes. We believe that every animal
            deserves a second chance, and we are committed to making a positive
            impact on the lives of both the animals and the people in our
            community.
          </div>
        </div>
        <div className="  w-full p-12 text-3xl font-medium text-white">
          Meet the team
          <div className="flex w-full justify-between p-12 font-normal">
            <div className="flex flex-col items-center gap-6 text-2xl">
              <Image
                src={team1}
                alt="team 1"
                className="h-60 w-60  rounded-full border-2 border-zinc-800 object-cover"
              />
              Aster Disaster
            </div>
            <div className="flex flex-col items-center gap-6 text-2xl">
              <Image
                src={team2}
                alt="team 2"
                className="h-60 w-60  rounded-full border-2 border-zinc-800 object-cover"
              />
              Majster Aster
            </div>
            <div className="flex flex-col items-center gap-6 text-2xl">
              <Image
                src={team3}
                alt="team 3"
                className="h-60 w-60  rounded-full border-2 border-zinc-800 object-cover"
              />
              Kapitan Marchewka
            </div>
          </div>
        </div>
        <div className="  p-12 text-3xl font-medium text-white">
          Get Involved
          <div className="flex gap-12 p-10 text-base font-normal">
            {items.map((item) => {
              return (
                <Link
                  href={item.link}
                  key={item.title}
                  className="mb-6 flex w-1/4 flex-col items-center drop-shadow transition-transform duration-200 ease-in-out hover:-translate-y-2"
                >
                  <Image src={item.image} alt="alt" className="  rounded-xl" />
                  <div className="p-2 text-2xl font-medium text-white">
                    {item.title}
                  </div>
                  <div className="p-2 text-center font-light text-white">
                    {item.text}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
