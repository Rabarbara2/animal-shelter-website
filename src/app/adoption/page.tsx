import { api } from "~/trpc/server";
import AnimalCard from "../_components/animal-card";
const allCats = await api.cat.getAll.query();
export default function Articles() {
  return (
    <main className=" flex min-h-screen flex-col items-center bg-zinc-900">
      <div className="w-5/6 bg-pink-900">
        <div className="mt-36 flex flex-col items-center gap-8">
          {allCats.map((cat) => {
            return (
              <AnimalCard
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
