import Image from "next/image";
import MaleSymbol from "../assets/male-symbol";
import FemaleSymbol from "../assets/female-symbol";
import { RouterOutputs } from "~/trpc/shared";
import Link from "next/link";
import { CatsResponse } from "~/server/queries";

type Cat = RouterOutputs["cat"]["getAll"]["0"];
type HealthIssues = RouterOutputs["healthIssue"]["getAll"];

type AnimalCardProps = {
  cat: CatsResponse["0"];
  healthIssues: HealthIssues;
};

export default function AnimalCard({
  healthIssues,
  cat: {
    catHealthRecords,
    colour,
    createdAt,
    dateOfBirth,
    furLength,
    gender,
    id,
    image,
    isDOBEstimated,
    name,
    race,
  },
}: AnimalCardProps) {
  return (
    <Link
      href={"/"}
      className="flex w-64 flex-col items-center rounded-3xl bg-red-50 
       shadow-md shadow-slate-800/30 transition-all duration-200 ease-in-out hover:-translate-y-2 hover:bg-white "
    >
      <Image
        src={image}
        width={288}
        height={384}
        alt="animal"
        className="🐷 h-72 w-64 rounded-t-2xl border-b border-slate-800 object-cover"
      />
      <div className="flex items-center justify-center">
        <div className=" p-4 text-2xl font-semibold">{name}</div>
        <div>
          {gender === "male" ? (
            <MaleSymbol className="h-8 w-8 bg-clip-content fill-blue-400" />
          ) : (
            <FemaleSymbol className=" h-10 w-10 bg-clip-content fill-pink-400" />
          )}
        </div>
        <div className="flex min-h-[40px] justify-center">
          <div className="flex items-center last:rounded-r">
            {catHealthRecords.map((record) => {
              const healthIssue = healthIssues.find(
                ({ id }) => id === Number(record.healthIssueId),
              );

              if (!healthIssue || healthIssue.type === "vaccine") {
                return null;
              }

              return (
                <div
                  key={`${record.catId} ${record.healthIssueId}`}
                  className={`border border-red-800 bg-red-600 p-1 text-[8px] text-white first:rounded-l last:rounded-r`}
                >
                  {healthIssue.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
