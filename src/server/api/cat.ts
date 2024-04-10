import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { cats, insertCatsSchema } from "../db/schema";

export const catRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.cats.findMany({
      with: {
        catHealthRecords: true,
      },
      orderBy: (cats, { desc }) => [desc(cats.createdAt)],
    });
  }),
  post: publicProcedure.input(insertCatsSchema).mutation(({ ctx, input }) => {
    return ctx.db.insert(cats).values({
      ...input,
    });
  }),
});
