import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";

import { env } from "~/env";
import * as schema from "./schema";

const pool = createPool({
  connectionLimit: 10, // Adjust according to your needs
  // Environment variable for the database name
  uri: env.DATABASE_URL,
});

// Initialize Drizzle-ORM with the created MySQL connection pool and schema
export const db = drizzle(pool, { schema, mode: "default" });
