const debug = require('debug');

const console = {
    log: debug('client-manager:log')
};

const clients = [];

function broadcast(me, payload) {
    clients.forEach((client) => {
        if (client === me) {
            return;
        }
        client.send(JSON.stringify(payload));
    })
}

function registerClient(client) {
    console.log('registerClient');
    clients.push(client);
}

function deleteClient(client) {
    const index = clients.indexOf(client);
    if (index === -1) {
        return;
    }
    console.log('deleteClient');
    clients.splice(index, 1);
}

module.exports = {
    registerClient,
    deleteClient,
    broadcast
};
