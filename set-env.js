/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const dotenv = require('dotenv');
const fs = require('fs');

// for-dev

fs.readFile('.env', (err) => {
  if (err) {
    throw new Error('There is no .env file.');
  }

  dotenv.config();
  const API_URL = `${process.env.API_URL}/${process.env.GLOBAL_PREFIX}`;

  const appContent = `
export const environment = {
  API_URL: '${API_URL}',
  PRODUCTION: ${process.env.PRODUCTION}
};`;

  fs.writeFile(
    './apps/extendable/src/environments/environment.ts',
    appContent,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  const apiContent = `
export const environment = {
  API_URL: '${API_URL}',
  PORT: '${process.env.PORT}',
  GLOBAL_PREFIX: '${process.env.GLOBAL_PREFIX}',
  DB_CONNECTION_STRING: '${process.env.CONNECTION_STRING}',
  PRODUCTION: ${process.env.PRODUCTION},
  JWT_SECRET: '${process.env.JWT_SECRET}'
};
`;

  fs.writeFile(
    './apps/api/src/environments/environment.ts',
    apiContent,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
