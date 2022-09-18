export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'consolex-db'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'consolex'),
      user: env('DATABASE_USERNAME', 'pouriasa'),
      password: env('DATABASE_PASSWORD', '4696048'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
