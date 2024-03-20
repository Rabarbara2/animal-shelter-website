import Link from "next/link";

export default async function Adoption() {
  return (
    <>
      <div> adoption</div>
      <Link href={"/adoption/dogs"}>woof</Link>
      <Link href={"/adoption/cats"}>meow</Link>
      <Link href={"/adoption/others"}>grrru?</Link>
    </>
  );
}
