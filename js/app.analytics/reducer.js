import { 
    REQUEST_ACTIVE_DEVICE_COUNTS, 
    RECEIVE_ACTIVE_DEVICE_COUNTS,
    RECEIVE_ACTIVE_DEVICE_COUNTS_ERRORS
} from './constants';

const initState = {
    isFetching: false,
    successful: false,
    deviceCounts: [],
    errors: []
};

export default function appAnalysis(state = initState, action) {
    switch (action.type) {
        case REQUEST_ACTIVE_DEVICE_COUNTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_ACTIVE_DEVICE_COUNTS:
            return Object.assign({}, state, {
                isFetching: false,
                successful: true,
                deviceCounts: action.activeDevices
            });
        case RECEIVE_ACTIVE_DEVICE_COUNTS_ERRORS:
            return Object.assign({}, state, {
                successful: false,
                isFetching: false,
                error: action.error
            });
        default:
            return state;
    }
}