import Link from "next/link";
import { getThreeArticles } from "~/server/queries";
import NewsCard from "./news-card";

export default async function NewsSection() {
  const latestArticles = await getThreeArticles();
  return (
    <div className="flex w-5/6 flex-col items-center gap-6 bg-pink-900 p-6">
      <div className="pt-12 text-center text-5xl font-medium text-white">
        Shelter news
      </div>

      <div className="pb-4 text-lg text-white">
        {" "}
        Podtytuł, jeszcze wymyśle jaki placeholder narazie{" "}
      </div>
      <div className="flex flex-col items-center gap-10 rounded-xl bg-pink-950 p-12">
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
    </div>
  );
}
