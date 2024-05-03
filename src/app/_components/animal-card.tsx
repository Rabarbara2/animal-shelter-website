import Image from "next/image";
import MaleSymbol from "../assets/male-symbol";
import FemaleSymbol from "../assets/female-symbol";
import Link from "next/link";
import type {
  AnimalsResponse,
  HealthIssueResponse,
  ImagesResponse,
} from "~/server/queries";
import { AnimalGenders } from "~/server/db/schema";

type AnimalCardProps = {
  animal: AnimalsResponse["0"];
  healthIssues: HealthIssueResponse;
};

export default function AnimalCard({
  healthIssues,
  animal: { gender, animalHealthRecords, name, animalImages },
}: AnimalCardProps) {
  return (
    <Link
      href={"/"}
      className="flex w-64 flex-col items-center rounded-3xl bg-red-50 
       shadow-md shadow-slate-800/30 transition-all duration-200 ease-in-out hover:-translate-y-2 hover:bg-white "
    >
      <Image
        src={
          animalImages?.url ??
          "https://media.discordapp.net/attachments/466300463361294336/1235996329495236750/cat-drawing-thumbnail.png?ex=663666c8&is=66351548&hm=a11f7e3d7b0a9c1855760fbe181e8066319094be6c4656ae7db48d0f00261e9d&=&format=webp&quality=lossless&width=670&height=670"
        }
        width={288}
        height={384}
        alt="animal"
        className="🐷 h-72 w-64 rounded-t-2xl border-b border-slate-800 object-cover"
      />
      <div className="flex items-center justify-center">
        <div className=" p-4 text-2xl font-semibold">{name}</div>
        <div>
          {gender === AnimalGenders.MALE ? (
            <MaleSymbol className="h-8 w-8 bg-clip-content fill-blue-400" />
          ) : (
            <FemaleSymbol className=" h-10 w-10 bg-clip-content fill-pink-400" />
          )}
        </div>
        <div className="flex min-h-[40px] justify-center">
          <div className="flex items-center last:rounded-r">
            {animalHealthRecords.map((record) => {
              const healthIssue = healthIssues.find(
                ({ id }) => id === Number(record.healthIssueId),
              );

              if (!healthIssue || healthIssue.type === "vaccine") {
                return null;
              }

              return (
                <div
                  key={`${record.animalId} ${record.healthIssueId}`}
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
