(function (root) {
    function setupUI() {
        document.addEventListener('Piotr:Alarm', () => {
            const $message = document.querySelector('p');
            $message.classList.remove('hidden');
        });
    }

    Object.assign(root.app, { setupUI });

}(window));

