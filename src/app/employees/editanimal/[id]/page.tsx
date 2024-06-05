import EditAnimalForm from "~/app/_components/edit-animal-form";
import { getAnimalImages } from "~/server/queries";

export default async function EditAnimal() {
  const animalimages = await getAnimalImages();
  return (
    <div>
      <EditAnimalForm images={animalimages} />
    </div>
  );
}
