export default ({ env }) => ({
  host: env("HOST", "https://strapi.consolex.shop"),
  url: env("PUBLIC_URL", "https://strapi.consolex.shop"),
  port: env.int("PORT", 1337),
  app: {
    keys: ["4696048pouria"],
  },
});
