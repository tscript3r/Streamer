import _ from 'lodash';
import { STREAM_EDIT, STREAM_DELETE, STREAM_FETCH_SINGLE, STREAM_FETCH_ALL, STREAM_CREATE } from '../actions/types';

const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case STREAM_FETCH_SINGLE:
        case STREAM_CREATE:
        case STREAM_EDIT:
            return { ...state, [action.payload.id]: action.payload }
        case STREAM_DELETE:
            return _.omit(state, action.payload);
        case STREAM_FETCH_ALL:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state;
    }
}

export default streamReducer;