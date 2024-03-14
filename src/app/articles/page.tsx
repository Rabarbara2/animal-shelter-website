import Link from "next/link";
import NewsCard from "../_components/news-card";
import { api } from "~/trpc/server";

const latestArticles = await api.article.getAll.query();

export default function Dupa() {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
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
