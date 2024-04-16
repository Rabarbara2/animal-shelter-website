import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { catHealthRecords, cats, insertCatsSchema } from "../db/schema";

export const catRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.select()
    .from(cats)
    
    .orderBy(desc("cats.created_at"));
    });
  }),
  post: publicProcedure.input(insertCatsSchema).mutation(({ ctx, input }) => {
    return ctx.db.insert(cats).values({
      ...input,
    });
  }),
});
