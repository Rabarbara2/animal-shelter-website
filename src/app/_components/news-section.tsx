import NewsCard from "./news-card";
import { api } from "~/trpc/server";

const latestArticles = await api.article.getThreeLatest.query();

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
    </div>
  );
}
