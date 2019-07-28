(function (root) {
    function setupUI() {
        console.log('notification');
        document.addEventListener('Piotr:Alarm', () => {
            const $message = document.querySelector('p');
            $message.classList.remove('hidden');
        });
    }

    Object.assign(root.app, { setupUI });

}(window));

