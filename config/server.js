module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4d515bccca787093dc28cb548f7f2fa0'),
    },
  },
});
// const strapi = require('strapi');
// strapi().start();