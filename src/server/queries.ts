import "server-only";
import { db } from "./db";

export async function getArticles() {
  const allArticles = await db.query.articles.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return allArticles;
}

export async function getThreeArticles() {
  const articles = await db.query.articles.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    limit: 3,
  });

  return articles;
}
