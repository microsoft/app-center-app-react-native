import { loginAPI } from '../utils/RequestUtil';

let storage = global.storage;

let auth = {

    login(username, password) {
        if (auth.loggedIn()) return Promise.resolve(true);
        return loginAPI({username, password})
            .then(response => {
                storage.token
            });
    },

    logout() {

    },

    loggedIn() {
        return false;
    },

    register (username, password) {

    }
};

export default auth;