import Image from "next/image";
import Link from "next/link";
import adopt from "../assets/Adopt.jpg";
import donate from "../assets/Donate.jpg";
import foster from "../assets/Foster.jpg";
import vol from "../assets/Vol.jpg";

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

export default function Buttons() {
  return (
    <div className="flex w-5/6 flex-col items-center bg-pink-900">
      <div className=" -translate-y-16 text-center text-5xl font-semibold leading-snug text-white">
        <p>Your next</p>
        <p>best friend is waiting! </p>
      </div>
      <div className="w-1/2 -translate-y-10 text-center  text-lg text-zinc-50">
        It&apos;s not about being flawless; it&apos;s about finding the right
        friend and creating wonderful moments together.
      </div>
      <div className="flex gap-12 p-10">
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
  );
}
