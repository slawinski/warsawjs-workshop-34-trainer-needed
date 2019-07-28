const process = require('process');
const ws = require('ws');

const setupServerHandler = require('../handlers/server.handler');
const { verifyClient } = require('../services/verify-client');

module.exports = () => {
    const port = Number(process.env.PORT);
    const settings = { port, verifyClient };
    const server = new ws.Server(settings);
    setupServerHandler(server);
}
