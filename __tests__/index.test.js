// index.test.js (Jest test file)

const request = require('supertest');
const app = require('../index'); // Assuming the Express app code is in a file named 'index.js'

// Jest test cases
describe('Test API Endpoints', () => {
  // Test / endpoint
  it('should return "Hello from Node!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello from Node!');
  });

  // Test /test endpoint
  it('should return "Hello from /test Node!"', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello from /test Node!');
  });
});
