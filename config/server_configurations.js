'use strict';

const CONFIG = {
  server: {
    host: process.env.HOSTNAME || '0.0.0.0',
    port: process.env.PORT || 3000,
  },
};

module.exports = CONFIG;