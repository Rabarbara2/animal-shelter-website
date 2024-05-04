import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import {
  pgTable,
  serial,
  text,
  timestamp,
  pgTableCreator,
  uniqueIndex,
  bigint,
  varchar,
  boolean,
  numeric,
  date,
  integer,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const db = drizzle(sql);

export const createTable = pgTableCreator((name) => `asw_${name}`);

export const articles = createTable("articles", {
  id: serial("id").primaryKey(),
  category: varchar("category", { length: 128 }).notNull(),
  createdById: varchar("createdById", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  text: text("text").notNull(),
});

export const animals = createTable("animals", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 128 }).notNull(),
  name: varchar("name", { length: 128 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  gender: varchar("gender", { length: 10 }),
  dateOfBirth: date("dateOfBirth").notNull(),
  colour: varchar("colour", { length: 50 }).notNull(),
  furLength: varchar("fur_length", { length: 100 }),
  race: varchar("race", { length: 50 }).notNull(),
});

export const animalsRelations = relations(animals, ({ one, many }) => ({
  animalImages: one(animalImages, {
    fields: [animals.id],
    references: [animalImages.animalId],
  }),
  animalHealthRecords: many(animalHealthRecords),
}));

export const animalImages = createTable("animal_image", {
  id: serial("id"),
  animalId: integer("animal_id").references(() => animals.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  url: varchar("url").notNull(),
});

export const animalImagesRelations = relations(animalImages, ({ one }) => ({
  animals: one(animals, {
    fields: [animalImages.animalId],
    references: [animals.id],
  }),
}));

export const healthIssues = createTable("health_issue", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  type: varchar("type", { length: 16 }).notNull(),
  animalType: varchar("type", { length: 16 }).notNull(),
});

export const animalHealthRecords = createTable("animal_health_record", {
  animalId: integer("animal_id")
    .references(() => animals.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull(),
  healthIssueId: integer("health_issue_id")
    .references(() => healthIssues.id)
    .notNull(),
  vaccinatedAt: timestamp("vaccinated_at"),
  testedAt: timestamp("tested_at"),
});

export const animalsToHealthIssuesRelations = relations(
  animalHealthRecords,
  ({ one }) => ({
    animals: one(animals, {
      fields: [animalHealthRecords.animalId],
      references: [animals.id],
    }),
    healthIssue: one(healthIssues, {
      fields: [animalHealthRecords.healthIssueId],
      references: [healthIssues.id],
    }),
  }),
);

export enum AnimalGenders {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other",
}

export const insertAnimalsSchema = createInsertSchema(animals);

export type AnimalsType = typeof animals.$inferInsert;
export type ArticlesType = typeof articles.$inferInsert;
