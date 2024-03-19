import { api } from "~/trpc/server";
import AnimalCard from "../_components/animal-card";

export default async function Articles() {
  const allCats = await api.cat.getAll.query();

  return (
    <main className=" flex min-h-screen flex-col items-center bg-zinc-900">
      <div className="w-5/6 bg-pink-900">
        <div className="mt-36 flex flex-wrap justify-center gap-8 p-6">
          {allCats.map((cat) => {
            return (
              <AnimalCard
                image={cat.image}
                key={cat.id}
                fip={cat.positiveFIP}
                gender={cat.gender}
                name={cat.name}
                race={cat.race}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
