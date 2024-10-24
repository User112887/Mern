const serverless = require('serverless-http');
const app = require('../app'); // Adjust the path as necessary

module.exports.handler = serverless(app);
