(function (root) {
    function setupUI() {
        const $alarm = document.querySelector('button');
        $alarm.addEventListener('click', () => {
            root.app.sendMessage({ action: 'alarm' });
        });
    }

    Object.assign(root.app, { setupUI });

}(window));
