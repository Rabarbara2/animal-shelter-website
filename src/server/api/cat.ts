import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const catRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.cats.findMany({
      orderBy: (cats, { desc }) => [desc(cats.createdAt)],
    });
  }),
});
