export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'test'),
      password: env('DATABASE_PASSWORD', 'qazwsx'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
