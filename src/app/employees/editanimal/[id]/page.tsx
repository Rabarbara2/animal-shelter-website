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
    <div>
      <EditAnimalForm images={animalimages} animal={currentAnimal} />
    </div>
  );
}
