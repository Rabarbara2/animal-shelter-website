import Image from "next/image";
import obrazek from "./assets/404.jpg";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-900">
      <Image src={obrazek} alt="ups" />
    </div>
  );
}
