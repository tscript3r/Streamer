import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT, STREAM_CREATE, STREAM_FETCH_SINGLE,
    STREAM_FETCH_ALL, STREAM_DELETE, STREAM_EDIT } from './types';
import history from '../history';

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

export const streamCreate = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId });
    dispatch({type: STREAM_CREATE, payload: response.data})
    history.push('/');
}

export const streamFetchAll = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({type: STREAM_FETCH_ALL, payload: response.data})
}

export const streamFetchSingle = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: STREAM_FETCH_SINGLE, payload: response.data})
}

export const streamDelete = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({type: STREAM_DELETE, payload: id})
    history.push('/');
}

export const streamEdit = (id, formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.put(`/streams/${id}`, { ...formValues, userId });
    dispatch({type: STREAM_EDIT, payload: response.data});
    history.push('/');
}