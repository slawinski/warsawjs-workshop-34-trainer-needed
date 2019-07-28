(function (root) {

    const app = {
        config: {
            url: 'ws://localhost:3000'
        }
    };

    // root.app = app
    Object.assign(root, { app })

}(window));
