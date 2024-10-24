const serverless = require('serverless-http');
const app = require('../app'); // Adjust the path if necessary

module.exports.handler = serverless(app);
