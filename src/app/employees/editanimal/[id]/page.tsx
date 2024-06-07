import EditAnimalForm from "~/app/_components/edit-animal-form";
import { getAnimal, getAnimalImages } from "~/server/queries";

export default async function EditAnimal({
  params,
}: {
  params: { id: number };
}) {
  const animalimages = await getAnimalImages();
  const currentAnimal = await getAnimal(params.id);
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-800 p-6 ">
      <div className="text-4xl text-white">Edit animal</div>
      <EditAnimalForm images={animalimages} animal={currentAnimal} />
    </div>
  );
}
