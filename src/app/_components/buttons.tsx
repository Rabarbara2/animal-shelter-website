import Image from "next/image";
import catPH from "../assets/placeholder.jpg";

const items = [
  { image: catPH, id: 1 },
  { image: catPH, id: 2 },
  { image: catPH, id: 3 },
  { image: catPH, id: 4 },
];

export default function Buttons() {
  return (
    <div className="flex w-5/6 bg-pink-900">
      {items.map((item) => {
        return (
          <div key={item.id} className="flex flex-col items-center p-6">
            <Image src={item.image} alt="alt" className="mt-28 rounded-3xl " />
            <div>TEXT</div>
            <div>lorem ipsum dolor sit amen</div>
          </div>
        );
      })}
    </div>
  );
}
