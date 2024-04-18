import Link from "next/link";
import NewsCard from "./news-card";
import { api } from "~/trpc/server";
import { getThreeArticles } from "~/server/queries";

const latestArticles = await getThreeArticles();

export default function NewsSection() {
  return (
    <div className="flex w-5/6 flex-col items-center gap-10 bg-pink-900 p-6 ">
      <div className="p-12 text-center text-5xl font-medium text-white">
        Shelter news
      </div>
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
      <Link
        href="/articles"
        className="rounded-xl bg-stone-300 p-6 text-2xl font-semibold text-black shadow hover:bg-stone-400 "
      >
        see more articles
      </Link>
    </div>
  );
}
