import { notFound } from "next/navigation";
import Navbar from "~/app/_components/navbar";
import { getAnimal } from "~/server/queries";
import Image from "next/image";
import { differenceInYears, differenceInMonths } from "date-fns";

function getCatAge(birthDate: Date) {
  const today = new Date();
  const years = differenceInYears(today, birthDate);
  const months = differenceInMonths(today, birthDate) % 12;
  return { years, months };
}

export default async function Page({ params }: { params: { id: number } }) {
  const cat = await getAnimal(params.id);

  if (!cat) {
    return notFound();
  }

  const dateOfBirth = new Date(cat.dateOfBirth);

  const age = getCatAge(dateOfBirth);

  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-800">
      <Navbar />
      <div className="flex w-5/6 gap-4 bg-pink-900 p-6 pt-32">
        <div className="p-6">
          <Image
            src={cat.animalImages.url}
            alt="ups"
            width={576}
            height={768}
            className="basis-1/2 rounded-xl drop-shadow"
          />
        </div>
        <div className="basis-1/2 p-6">
          <div className="flex flex-col gap-4 rounded-xl bg-pink-950 p-6 text-lg text-white">
            <div className="pb-6 text-4xl font-medium">{cat.name}</div>
            <div>• gender: {cat.gender}</div>
            <div>• race: {cat.race}</div>
            <div>• fur length: {cat.furLength}</div>
            <div>• colour: {cat.colour}</div>
            <div>
              • age: {age.years ? age.years + " years" : ""}{" "}
              {age.months ? age.months + " months" : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
