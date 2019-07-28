// TODO: kazde iife, na gorze root, na dole window
(function (root) {

    let socket = null;

    function sendMessage(data) {
        socket.send(JSON.stringify(data));
    }

    function getRandomInteger(from, to) {
        return Math.random() * (to - from) + from;
    }

    function reconnect() {
        const time = getRandomInteger(4000, 10000);
        setTimeout(() => {
            console.log('reconnect', time);
            setupServer();
        }, time);
    }

    function setupServer() {
        socket = new WebSocket(root.app.config.url);


        socket.addEventListener('open', () => {
            const payload = { action: 'alarm' };
            socket.send(JSON.stringify(payload));
            // debugger;
        });

        socket.addEventListener('message', () => {
            document.dispatchEvent(new CustomEvent('Piotr:Alarm'));
        });

        socket.addEventListener('close', () => {
            console.log('close');
            reconnect();
        });

        socket.addEventListener('error', () => {
            console.log('error');
            reconnect();
        });
    }

    Object.assign(root.app, { sendMessage, setupServer });

}(window));
