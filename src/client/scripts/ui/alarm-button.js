(function (root) {
    function setupUI() {
        console.log('alarm button');
        const $alarm = document.querySelector('button');
        $alarm.addEventListener('click', () => {
            root.app.sendMessage({ action: 'alarm' });
        });
    }

    Object.assign(root.app, { setupUI });

}(window));
