import * as actionTypes from './action-types';

const loadTopStoriesBegin = () => {
    return {
        type: actionTypes.LOAD_TOP_STORIES_BEGIN,
        payload: null,
    };
};

const loadTopStoriesSuccess = (topStories) => {
    return {
        type: actionTypes.LOAD_TOP_STORIES_SUCCESS,
        payload: topStories,
    };
};

const loadTopStoriesFail = (error) => {
    return {
        type: actionTypes.LOAD_TOP_STORIES_FAIL,
        payload: error,
    };
};

export const loadTopStories = () => {
    return async dispatch => {
        dispatch(loadTopStoriesBegin());

    }
}