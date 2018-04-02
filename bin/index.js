'use strict';

// This scripts simply initialize support for ES2015(ES6),
// loads the server runtime, and then starts the server

require('babel-register');

const Logger = require('../lib/logger').default;
const Server = require('../server/server').default;

const LOG = Logger.getLogger('server');

// Set NODE_ENV to production as default
if (!process.env.NODE_ENV)
  process.env.NODE_ENV = 'production';

(async () => {
  try {
    await Server.getServerInstance().start();
    LOG.info('The server is running...');
  } catch(error) {
    LOG.fatal('Couldn\'t not start server: \n', error.stack)
  }
})();

