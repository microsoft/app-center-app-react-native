import { 
    REQUEST_ACTIVE_DEVICE_COUNTS, 
    RECEIVE_ACTIVE_DEVICE_COUNTS, 
    RECEIVE_ACTIVE_DEVICE_COUNTS_ERRORS 
} from './constants';

export function requestActiveDeviceCounts() {
    return {
        type: REQUEST_ACTIVE_DEVICE_COUNTS
    };
}

export function receiveActiveDeviceCounts(data) {
    return {
        type: RECEIVE_ACTIVE_DEVICE_COUNTS,
        activeDevices: data
    };
}

export function receiveActiveDeviceCountsError(error) {
    return {
        type: RECEIVE_ACTIVE_DEVICE_COUNTS_ERRORS,
        error: error
    };
}
