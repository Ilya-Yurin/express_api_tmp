import Logger from '../../lib/logger';

require('should');
const sinon = require('sinon');
const log4js = require('log4js');

describe('Logger', function() {
 let infoSpy, getLoggerStub;
  
  before(() => {
    infoSpy = sinon.spy();
    getLoggerStub = sinon.stub(log4js, 'getLogger');
    getLoggerStub.returns({ info: infoSpy });
  });
  
  it('should log something', function() {
    const LOG = Logger.getLogger('test');
    LOG.info('Test log');
    
    infoSpy.calledOnce.should.equal(true);
    infoSpy.calledWithExactly('Test log').should.equal(true);
  });
});