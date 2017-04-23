import { 
    REQUEST_DISTRIBUTE_RELEASES, 
    RECEIVE_DISTRIBUTE_RELEASES,
    RECEIVE_DISTRIBUTE_RELEASES_ERROR 
} from './constants';

export function requestDistributeReleases() {
    return {
        type: REQUEST_DISTRIBUTE_RELEASES
    };
}

export function receiveDistributeReleases(data) {
    return {
        type: RECEIVE_DISTRIBUTE_RELEASES,
        releases: data
    };
}