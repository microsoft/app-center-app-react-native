import auth from '../../js/auth';

test('returns true on correct login', () => {
    return auth.login('juan', 'password')
    .then(response => {
        expect(response).toBe(true);
    });
});

test('returns error on wrong password',  () => {
    auth.login('juan', 'wrong')
    .catch(error => {
        expect(error).toBe("Wrong");
    });
});

