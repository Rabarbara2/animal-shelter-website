import { notFound } from "next/navigation";
import { getAnimal } from "~/server/queries";

export default async function Page({ params }: { params: { id: number } }) {
  const cat = await getAnimal(params.id);

  if (!cat) {
    return notFound();
  }

  return (
    <div>
      {cat?.name} jest brzydki
      {cat?.colour} to najgorszy kolor
      {cat?.race} to najgorsza .. a nie ważne
    </div>
  );
}
