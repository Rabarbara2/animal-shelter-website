import Image from "next/image";
import MaleSymbol from "../assets/male-symbol";
import FemaleSymbol from "../assets/female-symbol";
import { RouterOutputs } from "~/trpc/shared";

type Cat = RouterOutputs["cat"]["getAll"]["0"];
type HealthIssues = RouterOutputs["healthIssue"]["getAll"];

type AnimalCardProps = {
  cat: Cat;
  healthIssues: HealthIssues;
};

export default function AnimalCard({
  cat: { image, gender, name, catHealthRecords },
  healthIssues,
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
      <div className="flex min-h-[40px] justify-center">
        <div className="flex items-center last:rounded-r">
          {catHealthRecords.map((record) => {
            const healthIssue = healthIssues.find(
              ({ id }) => id === Number(record.healthIssueId),
            );

            if (!healthIssue) {
              return null;
            }

            return (
              <div
                key={`${record.catId} ${record.healthIssueId}`}
                className={`border ${healthIssue.type === "disease" ? "border-red-800 bg-red-600" : "border-teal-800 bg-teal-600"} p-1 text-[8px] text-white first:rounded-l last:rounded-r`}
              >
                {
                  healthIssues.find(
                    ({ id }) => id === Number(record.healthIssueId),
                  )?.name
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
