import Image from "next/image";
import { getCatImages } from "~/server/queries";

export default async function ImageTest() {
  const catImages = await getCatImages();
  return (
    <div className="flex w-5/6 flex-col items-center gap-10 bg-pink-900 p-6 ">
      {catImages.map((image) => {
        return (
          <Image
            alt="pies"
            key={image.id}
            src={image.url}
            width={50}
            height={50}
          />
        );
      })}
    </div>
  );
}
