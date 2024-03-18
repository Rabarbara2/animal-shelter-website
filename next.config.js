/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        hostname: "media.discordapp.net",
      },
      {
        hostname: "cdn.discordapp.com",
      },
    ],
  },
};

export default config;
