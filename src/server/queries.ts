"use server";
"server only";

import { and, eq, ne } from "drizzle-orm";
import { db } from "./db";
import { articles, animals, animalImages } from "./db/schema";
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
    orderBy: (model, { desc }) => desc(model.id),
  });

  return animals;
}

export async function getCats() {
  const cats = await db.query.animals.findMany({
    where: eq(animals.type, "cat"),
    with: { animalHealthRecords: true, animalImages: true },
    orderBy: (model, { desc }) => desc(model.id),
  });

  return cats;
}

export async function getAnimal(id: number) {
  const animal = await db.query.animals.findFirst({
    where: eq(animals.id, id),
    with: {
      animalHealthRecords: true,
      animalImages: true,
    },
  });

  return animal;
}
export async function getDogs() {
  const dogs = await db.query.animals.findMany({
    where: eq(animals.type, "dog"),
    with: { animalHealthRecords: true, animalImages: true },
    orderBy: (model, { desc }) => desc(model.id),
  });

  return dogs;
}
export async function getOtherAnimals() {
  const others = await db.query.animals.findMany({
    where: and(ne(animals.type, "dog"), ne(animals.type, "cat")),
    with: { animalHealthRecords: true, animalImages: true },
    orderBy: (model, { desc }) => desc(model.id),
  });

  return others;
}

export async function getAnimalImages() {
  const images = await db.query.animalImages.findMany({
    with: {},
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}

export type AnimalsResponse = Awaited<ReturnType<typeof getAnimals>>;
export type ImagesResponse = Awaited<ReturnType<typeof getAnimalImages>>;
export type HealthIssueResponse = Awaited<ReturnType<typeof getHealthIssues>>;

export async function postAnimals(params: AnimalsType) {
  const [result] = await db
    .insert(animals)
    .values({
      ...params,
      id: animals.id.default,
    })
    .returning({ id: animals.id });

  return result;
}
export async function postArticle(params: ArticlesType) {
  await db.insert(articles).values({
    ...params,
    id: articles.id.default,
  });
}

export async function deleteImage(imageId: ImagesResponse["0"]["id"]) {
  await db.delete(animalImages).where(eq(animalImages.id, imageId));
}
export async function asignImagetoAnimal(
  newAnimalId: ImagesResponse["0"]["animalId"],
  imageId: ImagesResponse["0"]["id"],
) {
  await db
    .update(animalImages)
    .set({ animalId: newAnimalId })
    .where(eq(animalImages.id, imageId));
}
