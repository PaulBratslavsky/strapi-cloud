module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DB_HOST', '127.0.0.1'),
      port: env.int('DB_PORT', 5432),
      database: env('DB_NAME', 'strapi'),
      user: env('DB_USERNAME', 'strapi'),
      password: env('DB_PASSWORD', 'strapi'),
      schema: env('DB_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DB_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
