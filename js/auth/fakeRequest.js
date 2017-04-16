import server from './fakeServer';

server.init();

let fakeRequest = {
    post (endpoint, data) {
        switch (endpoint) {
            case '/login':
                return server.login(data.username, data.password);
            case '/register':
                return server.register(data.username, data.password);
            case '/logout':
                return server.logout();
            default:
                break;
        }
    }
};

export default fakeRequest;