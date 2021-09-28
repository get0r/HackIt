import * as actionTypes from './action-types';

const INITIAL_STATE = {
    topStories: {
        list: [],
        detail: [],
        loading: false,
    },
    topJobs: {
        list: [],
        detail: [],
        loading: false,
    },
    error: null,
};

export const storiesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.LOAD_TOP_STORIES_BEGIN:
            return {
                ...state,
                topStories: {
                    ...state.topStories,
                    loading: true,
                }
            };
        case actionTypes.LOAD_TOP_STORIES_SUCCESS:
            console.log(payload.detail)
            return {
                ...state,
                topStories: {
                    ...state.topStories,
                    list: [...payload.list],
                    detail: [...state.topStories.detail, ...payload.detail],
                    loading: false,
                },
                error: null,
            }
        case actionTypes.LOAD_TOP_STORIES_FAIL:
            return {
                ...state,
                topStories: {
                    ...state.topStories,
                    loading: false,
                },
                error: payload
            }
        default:
            return state;
    }
}