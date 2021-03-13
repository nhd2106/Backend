module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          host: env('DATABASE_HOST'),
          port: env('DATABASE_PORT'),
          database: 'strapi',
          username: env('DATABASE_USERNAME'),
          password: env('DATABASE_PASSWORD'),
        },
        options: {
          
        },
      },
    },
  });