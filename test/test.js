import Server from '../server/server';
const assert = require('assert');

describe('Loading server', function() {
  let server;
  before(() => server = Server.getServerInstance());
  after(() => server.stop());
  
  it('is the only instance', () => {
    const newInstance = new Server();
    assert.equal(server, newInstance);
  });
  
  it('start server', done => {
    server.start().then(() => done());
  });
  
  it('has stop method', () => {
    assert.equal(typeof server.stop, 'function');
  })
});

