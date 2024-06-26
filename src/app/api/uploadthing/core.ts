import { createUploadthing, type FileRouter } from "uploadthing/next";
import { animalImages, db } from "~/server/db/schema";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  animalImageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 8 } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      await db.insert(animalImages).values({
        url: file.url,
      });

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { fileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
