'use strict';

import log4js from 'log4js';

export default class Logger {
  static getLogger (name = 'root') {
    const log = log4js.getLogger(`${name}`);
    log.level = 'debug';
    
    return log;
  }
}

