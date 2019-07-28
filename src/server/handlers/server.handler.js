const setupSocketHandler = require('./socket.handler');

module.exports = (server) => {

    server.on('headers', () => {
        console.log('headers');
    });

    server.on('connection', (socket, _request) => {
        setupSocketHandler(socket);
    });

    server.on('listening', () => {
        console.log('listening');
    });

    server.on('error', () => {
        console.log('error');
    });

}
