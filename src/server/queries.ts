"use server";
"server only";
import { db } from "./db";
import { cats } from "./db/schema";
import type { CatsType } from "./db/schema";

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
    limit: 3,
  });

  return cats;
}

export type CatsResponse = Awaited<ReturnType<typeof getCats>>;

export async function postCats(params: CatsType) {
  console.log({ ...params, id: cats.id.default }, "params");
  await db.insert(cats).values({
    ...params,
    id: cats.id.default,
  });
}
