export default ({ env }) => ({
  host: env("HOST", "https://strapi.consolex.shop"),
  port: env.int("PORT", 1337),
  app: {
    keys: ["4696048pouria"],
  },
});
