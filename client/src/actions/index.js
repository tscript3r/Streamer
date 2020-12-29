import streams from '../apis/streams';
import {SIGN_IN, SIGN_OUT, STREAM_CREATED} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = formValues => async dispatch => {
    const response = await streams.post('/streams', formValues);
    dispatch({type: STREAM_CREATED, payload: response.data})
}
