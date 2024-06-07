export const dynamic = "force-dynamic";

import AnimalCard from "~/app/_components/animal-card";
import BackButton from "~/app/_components/back-button";

import { getAnimals, getHealthIssues } from "~/server/queries";

export default async function AddAnimal() {
  const animals = await getAnimals();
  const healthIssues = await getHealthIssues();

  return (
    <div className=" min-h-screen w-full bg-slate-900">
      <div className="w-full pl-6 pt-6 text-2xl text-white">
        choose animal you want to edit:
      </div>
      <div className=" flex flex-wrap justify-center gap-3 p-10">
        {animals.map((animal) => {
          return (
            <AnimalCard
              key={animal.id}
              animal={animal}
              healthIssues={healthIssues}
              href={`/employees/editanimal/${animal.id}`}
            />
          );
        })}
      </div>
      <div className="p-6">
        <BackButton />
      </div>
    </div>
  );
}
