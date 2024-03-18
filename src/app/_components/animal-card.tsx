import Image from "next/image";

type AnimalCardProps = {
  name: string;
  race: string;
  gender: string | null;
  fip: boolean | null;
  image: string;
};

export default function AnimalCard({
  fip,
  gender,
  image,
  name,
  race,
}: AnimalCardProps) {
  return (
    <div className="flex h-fit w-[21rem] flex-col items-center rounded-xl bg-red-50 p-6 shadow transition-colors duration-100 ease-in-out hover:bg-white">
      <Image
        src={image}
        width={288}
        height={384}
        alt="animal"
        className="🐷 h-96 w-72 rounded-xl object-cover "
      />
      <div className="mt-2 text-xl font-semibold">
        {name}, {gender === "Male" ? "M" : "F "}
      </div>
      {fip ? <div className=" text-red-600">FIP!</div> : ""}
      <div className="mt-4 text-center text-zinc-800">
        🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷
      </div>
    </div>
  );
}
