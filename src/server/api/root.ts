import { createTRPCRouter } from "~/server/api/trpc";
import { articleRouter } from "./routers/article";
import { catRouter } from "./cat";
import { healthIssueRouter } from "./healthIssue";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  article: articleRouter,
  cat: catRouter,
  healthIssue: healthIssueRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
