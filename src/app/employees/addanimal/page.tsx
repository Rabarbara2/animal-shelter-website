import FormTest from "~/app/_components/form-test";
import { getAnimalImages } from "~/server/queries";

const images = await getAnimalImages();
export default function AddAnimal() {
  return (
    <div className=" flex justify-center bg-slate-900 p-10">
      <FormTest images={images} />
    </div>
  );
}
