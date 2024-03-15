import Link from "next/link";
import NewsCard from "../_components/news-card";
import { api } from "~/trpc/server";
import Navbar from "../_components/navbar";

const latestArticles = await api.article.getAll.query();

export default function Dupa() {
  return (
    <main className=" flex min-h-screen flex-col items-center bg-zinc-900">
      <div className="w-5/6 bg-pink-900">
        <Navbar />
        <div className="mt-36 flex flex-col items-center gap-8">
          {latestArticles.map((article) => {
            return (
              <NewsCard
                key={article.id}
                text={article.text}
                category={article.category}
                createdAt={article.createdAt}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
