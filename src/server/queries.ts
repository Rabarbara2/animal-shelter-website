"use server";
"server only";
import { db } from "./db";
import { articles, cats } from "./db/schema";
import type { ArticlesType, CatsType } from "./db/schema";

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

export async function getHealthIssues() {
  const issues = await db.query.healthIssues.findMany({});

  return issues;
}

export async function getCats() {
  const cats = await db.query.cats.findMany({
    with: {
      catHealthRecords: true,
    },
    orderBy: (model, { desc }) => desc(model.id),
  });

  return cats;
}

export async function getCatImages() {
  const images = await db.query.catImages.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}

export type CatsResponse = Awaited<ReturnType<typeof getCats>>;
export type HealthIssueResponse = Awaited<ReturnType<typeof getHealthIssues>>;

export async function postCats(params: CatsType) {
  await db.insert(cats).values({
    ...params,
    id: cats.id.default,
  });
}
export async function postArticle(params: ArticlesType) {
  await db.insert(articles).values({
    ...params,
    id: articles.id.default,
  });
}
