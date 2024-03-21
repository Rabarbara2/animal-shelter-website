import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const healthIssueRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.healthIssues.findMany();
  }),
});
