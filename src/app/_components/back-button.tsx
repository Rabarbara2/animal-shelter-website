"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="m-6 h-fit w-fit text-lg text-white hover:cursor-pointer hover:text-pink-400"
    >
      go back
    </div>
  );
}
