import { db } from "./db";
import { CatsType, cats } from "./db/schema";

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

export async function postCats(params: CatsType) {
  await db.insert(cats).values({
    ...params,
  });
}
