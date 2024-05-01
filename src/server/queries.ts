"use server";
"server only";
import { db } from "./db";
import { articles, animals } from "./db/schema";
import type { ArticlesType, AnimalsType } from "./db/schema";

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

export async function getAnimals() {
  const animals = await db.query.animals.findMany({
    with: { animalHealthRecords: true, animalImages: true },
  });

  return animals;
}

export async function getAnimalImages() {
  const images = await db.query.animalImages.findMany({
    with: {},
    orderBy: (model, { desc }) => desc(model.animalId),
  });

  return images;
}

export type AnimalsResponse = Awaited<ReturnType<typeof getAnimals>>;
export type HealthIssueResponse = Awaited<ReturnType<typeof getHealthIssues>>;

export async function postAnimals(params: AnimalsType) {
  await db.insert(animals).values({
    ...params,
    id: animals.id.default,
  });
}
export async function postArticle(params: ArticlesType) {
  await db.insert(articles).values({
    ...params,
    id: articles.id.default,
  });
}
