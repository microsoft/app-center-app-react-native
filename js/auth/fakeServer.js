import store from 'react-native-simple-store';

let server = {

    init () {
        if ( store.get('users') === null) {
            let juan = 'juan';
            let juanPass = 'password';
            let users = {
                [juan]: juanPass
            };
            store.save('users', JSON.stringify(users));
        }
    },

    login(username, password) {
        let userExists = this.doesUserExist(username);
        let users = JSON.parse(store.get('users'));

        return new Promise((resolve, reject) => {
            if (userExists && compareSync(password, users[username])) {
                let token = Math.random().toString(36).substring(7);
                store.save('token', token);
                resolve({
                    authenticated: true,
                    // Fake a random token
                    token: token
                });
            } else {
                if (userExists) {
                   reject(new Error('Wrong Password')); 
                } else {
                   reject(new Error('User doesn\'t exist'));
                }
            }
        });
    },

    register(username, password) {
        return new Promise((resolve, reject) => {
            if (!this.doesUserExist(username)) {
                users[username] = hashSync(password, salt);
                store.save('users', users);
                resolve({registered: true});
            } else {
                reject(new Error('Username already in use'));
            }
        });
    },

    logout() {
        return new Promise(resolve => {
            store.delete('token');
            resolve(true);
        });
    },

    doesUserExist(username) {
        return (store.get('users') !== null);
    }
};

server.init();
export default server;