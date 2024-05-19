import Link from "next/link";

export default function Employees() {
  return (
    <div className=" flex h-screen justify-center bg-slate-900 p-10">
      <div className="flex w-3/4 flex-col  gap-6 rounded-xl bg-slate-300 p-6 text-xl">
        <div className="w-full text-base">Shelter manager panel</div>
        <div className="font-semibold">Actions:</div>
        <Link href={"/"} className="w-fit text-lg hover:text-pink-600">
          - go back to main page
        </Link>
        <Link
          href={"employees/addanimal"}
          className="w-fit text-lg hover:text-pink-600"
        >
          - add animal
        </Link>
        <Link
          href={"employees/addarticle"}
          className="w-fit text-lg hover:text-pink-600"
        >
          - add article
        </Link>
        <Link
          href={"employees/editanimal"}
          className="w-fit text-lg hover:text-pink-600"
        >
          - edit animal
        </Link>
      </div>
    </div>
  );
}
