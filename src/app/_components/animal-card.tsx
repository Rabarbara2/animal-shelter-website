import Image from "next/image";
import MaleSymbol from "../assets/male-symbol";
import FemaleSymbol from "../assets/female-symbol";

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
    <div className="flex  w-[21rem] flex-col items-center rounded-xl bg-red-50  shadow transition-colors duration-100 ease-in-out hover:bg-white">
      <div className="flex items-center justify-center">
        <div className=" p-4 text-2xl font-semibold">{name}</div>
        <div>
          {gender === "Male" ? (
            <MaleSymbol className="h-8 w-8 bg-clip-content fill-blue-400" />
          ) : (
            <FemaleSymbol className=" h-10 w-10 bg-clip-content fill-pink-400" />
          )}
        </div>
      </div>
      <Image
        src={image}
        width={288}
        height={384}
        alt="animal"
        className="🐷 h-96 w-72 rounded-xl border-4 object-cover"
      />

      {fip ? <div className=" text-red-600">FIP!</div> : ""}
      <div className="mt-4 text-center text-zinc-800">
        🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷
      </div>
    </div>
  );
}
