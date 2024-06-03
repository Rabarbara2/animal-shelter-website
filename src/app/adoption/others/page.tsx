export const dynamic = "force-dynamic";

import { getHealthIssues, getOtherAnimals } from "~/server/queries";
import AnimalCard from "../../_components/animal-card";
import Navbar from "../../_components/navbar";

export default async function Others() {
  const allAnimals = await getOtherAnimals();
  const healthIssues = await getHealthIssues();

  return (
    <main className=" flex min-h-screen flex-col items-center bg-zinc-900">
      <Navbar />

      <div className="w-5/6 bg-pink-900">
        <div className="mt-44 p-6 text-center text-5xl font-semibold text-white">
          Meet our wonderful pets!
        </div>
        <div className="p-6 text-center text-xl font-medium text-white">
          Every one of them is ready for a new home. Will you be their new
          friend?
        </div>
        <div className="mb-16 flex flex-wrap justify-center gap-8 p-6">
          {allAnimals.map((animal) => {
            return (
              <AnimalCard
                key={animal.id}
                animal={animal}
                healthIssues={healthIssues}
                href={`/adoption/others/${animal.id}`}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
