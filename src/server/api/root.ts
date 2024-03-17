import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { articleRouter } from "./routers/article";
import { catRouter } from "./cat";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  article: articleRouter,
  cat: catRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
