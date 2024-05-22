export const dynamic = "force-dynamic";

import FormTest from "~/app/_components/form-test";
import { getAnimalImages } from "~/server/queries";

export default async function AddAnimal() {
  const images = await getAnimalImages();
  return (
    <div className=" flex justify-center bg-slate-900 p-10">
      <FormTest images={images} />
    </div>
  );
}
