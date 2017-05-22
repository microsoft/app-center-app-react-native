import { REQUEST_USER, RECEIVE_USER, RECEIVE_USER_ERROR} from './constants';

const initState = {
  isFetching: false,
  successful: false,
  user: [],
  errors: []
};

export default function user(state = initState, action) {
  switch (action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        successful: true,
        user: action.response
      });
    case RECEIVE_USER_ERROR:
      return Object.assign({}, state, {
        successful: false,
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}
