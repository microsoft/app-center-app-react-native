import { 
    REQUEST_DISTRIBUTE_RELEASES, 
    RECEIVE_DISTRIBUTE_RELEASES,
    RECEIVE_DISTRIBUTE_RELEASES_ERROR 
} from './constants';

const initState = {
  isFetching: false,
  successful: false,
  releases: [],
  errors: []
};

export default function distributeReleases (state = initState, action) {
    switch (action.type) {
        case REQUEST_DISTRIBUTE_RELEASES:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_DISTRIBUTE_RELEASES:
              return Object.assign({}, state, {
                isFetching: false,
                successful: true,
                releases: action.response
            });
        case RECEIVE_DISTRIBUTE_RELEASES_ERROR:
            return Object.assign({}, state, {
                successful: false,
                isFetching: false,
                error: action.error
            });
        default:
            return state;
    }
}