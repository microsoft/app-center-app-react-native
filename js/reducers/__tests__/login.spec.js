import login from '../login';
import auth from '../../auth';
import {SENDING_REQUEST} from '../../actions/types';

describe('reducer login state machine', () => {

    function getInitState() {
        return {
            formState: {
                username: '',
                password: ''
            }, 
            error: '',
            currentlySending: false,
            loggedIn: false
        };
    }
    let state = {};
    beforeEach(() => {
        state = getInitState();
    });
    it('login', () => {
        expect(login(state, {
            type: SENDING_REQUEST,
            sending: true
        })).toEqual({
            formState: {
                username: '',
                password: ''
            }, 
            error: '',
            currentlySending: true,
            loggedIn: false
        });
    });
});