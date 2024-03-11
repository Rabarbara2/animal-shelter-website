import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const articleRouter = createTRPCRouter({
  getThreeLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.articles.findMany({
      orderBy: (articles, { desc }) => [desc(articles.createdAt)],
      limit: 3,
    });
  }),
});
