const { registerClient, deleteClient, broadcast } = require('../services/client-manager');

module.exports = (socket) => {
    registerClient(socket);

    socket.on('open', () => {
        console.log('open');
    });

    socket.on('close', () => {
        console.log('close');
        deleteClient(socket);
    });

    socket.on('message', (payload) => {
        // debugger;
        try {
            const data = JSON.parse(payload);
            broadcast(socket, data);
            console.log('message', data);
        } catch (err) {
            console.log(err);
        }
    });

    socket.on('error', () => {
        console.log('error');
        deleteClient(socket);
    });
};
