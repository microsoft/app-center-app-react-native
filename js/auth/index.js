import request from './fakeRequest';
import { loginAPI } from '../utils/RequestUtil';
import store from 'react-native-simple-store';

let auth = {

    login(username, password) {
        if (auth.loggedIn()) return Promise.resolve(true);
        // Post a fake request
        return request.post('login', {username, password})
         .then(reponse => {
             store.save('token', response.token);
             return Promise.resolve(true);
         });
    },

    logout() {
        return request.post('/logout');
    },

    loggedIn() {
        return store.get('token') !== null;
    },

    register (username, password) {
        return request.post('/register', {username, password})
            .then( () => auth.login(username, password)
        );
    }
};

export default auth;