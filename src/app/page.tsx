import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="min-h-screen items-center justify-center bg-zinc-900">
      <div className="text-white">navbar</div>
      <div className="text-white">hero dog image</div>
      <div className="text-white">buttons</div>
      <div className="text-white">animal gallery</div>
      <div className="text-white">join us</div>
      <div className="text-white">news</div>
      <div className="text-white">sponsors</div>
      <div className="text-white">footer</div>
    </main>
  );
}
