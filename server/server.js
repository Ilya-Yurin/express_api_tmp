'use strict';

/* Vendor imports */
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import Promise from 'bluebird';
/* Vendor imports */

/* Custom imports */
import CONFIG from '../config/server_configurations';
import Logger from '../lib/logger';
/* Custom imports */

const LOG = Logger.getLogger('server');

export default class Server {
  static instance;
  
  constructor (server) {
    if (Server.instance) {
      return Server.instance;
    }
    this.server = server;
    
    this.server.use(cors());
    this.server.use(bodyParser.json());
    this.server.use(compression());
  }
  
  static getServerInstance (server) {
    if (Server.instance) {
      return Server.instance;
    }
    else {
      Server.instance = new Server(server);
      return Server.instance;
    }
    
  }
  
  start () {
    return new Promise((resolve) => {
      this._conn = this.server.listen(CONFIG.server.port, CONFIG.server.host, () => resolve());
    });
  }
  
  stop () {
    return new Promise((resolve, reject ) => {
      if (!this._conn) {
        LOG.info('Server is not running');
        reject(Error('Server is not running'));
      }
    
      this._conn.close(() => {
        LOG.info('Server is stopped');
        return resolve();
      });
      this._conn = null;
    });
  }
}

