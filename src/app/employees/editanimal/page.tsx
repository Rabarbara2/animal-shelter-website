export const dynamic = "force-dynamic";

import AnimalCard from "~/app/_components/animal-card";

import { getAnimals, getHealthIssues } from "~/server/queries";

export default async function AddAnimal() {
  const animals = await getAnimals();
  const healthIssues = await getHealthIssues();

  return (
    <div className=" flex flex-wrap justify-center gap-3 bg-slate-900 p-10">
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
  );
}
