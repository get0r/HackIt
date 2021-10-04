import * as storyActionTypes from './Stories/TopStories/action-types';
import * as ApiFunctions from '../api/hackerAPI';

export const loadBegin = actionType => {
    return {
        type: actionType,
    };
};

export const loadSuccess = (actionType, payload) => {
    return {
        type: actionType,
        payload
    };
};

export const loadFail = (actionType, error) => {
    return {
        type: actionType,
        payload: error
    };
};