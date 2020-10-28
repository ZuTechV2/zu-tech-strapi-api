module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        // ssl: env.bool('DATABASE_SSL'),
      },
      options: {
        // options: { ssl: false, 
          pool:{ min: 0, max: 15, acquireTimeoutMillis: 2000, idleTimeoutMillis: 2000, createTimeoutMillis: 30000,
            acquireTimeoutMillis: 30000 } },
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: process.env.DATABASE_HOST,
//         port: process.env.DATABASE_PORT,
//         database: process.env.DATABASE_NAME,
//         username: process.env.DATABASE_USERNAME,
//         password: process.env.DATABASE_PASSWORD,
//         ssl: process.env.DATABASE_SSL
//       },
//       options: {}
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST'),
//         port: env.int('DATABASE_PORT'),
//         database: env('DATABASE_NAME'),
//         username: env('DATABASE_USERNAME'),
//         password: env('DATABASE_PASSWORD'),
//         // ssl: env.bool('DATABASE_SSL'),
//       },
//       options: {
//         ssl: false
//       }
//     },
//   },
// });

// module.exports = ({ env }) => ({
//     defaultConnection: 'default',
//     connections: {
//       default: {
//         connector: 'bookshelf',
//         settings: {
//           client: 'postgres',
//           host: env('DATABASE_HOST', '127.0.0.1'),
//           port: env.int('DATABASE_PORT', 5432),
//           database: env('DATABASE_NAME', 'zu-tech'),
//           username: env('DATABASE_USERNAME', 'db_user'),
//           password: env('DATABASE_PASSWORD', 'password'),
//           ssl: env.bool('DATABASE_SSL', false),
//         },
//         options: {}
//       },
//     },
//   });

// module.exports = ({ env }) => ({
//   "defaultConnection": "default",
//   "connections": {
//     "default": {
//       "connector": "bookshelf",
//       "settings": {
//         "client": "postgres",
//         "host": "${process.env.DATABASE_HOST}",
//         "port": "${process.env.DATABASE_PORT}",
//         "database": "${process.env.DATABASE_NAME}",
//         "username": "${process.env.DATABASE_USERNAME}",
//         "password": "${process.env.DATABASE_PASSWORD}",
//       },
//       "options": {}
//     }
//   }
// });

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: process.env.DATABASE_HOST,
//         port: process.env.DATABASE_PORT,
//         database: process.env.DATABASE_NAME,
//         username: process.env.DATABASE_USERNAME,
//         password: process.env.DATABASE_PASSWORD,
//         ssl: process.env.DATABASE_SSL
//       },
//       options: {}
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'zu-tech'),
//         username: env('DATABASE_USERNAME', 'db_user'),
//         password: env('DATABASE_PASSWORD', 'password'),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//       options: {}
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
