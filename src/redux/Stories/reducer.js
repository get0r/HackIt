import * as actionTypes from './action-types';

const INITIAL_STATE = {
    topStories: {
        list: [],
        detail: [],
        loading: false,
        error: null,
    },
    allStories: {
        detail: [],
        offset: 0,
        error: null,
    }
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
            return {
                ...state,
                topStories: {
                    ...state.topStories,
                    list: [...payload.list],
                    detail: [...state.topStories.detail, ...payload.detail],
                    loading: false,
                    error: null,
                },
            }
        case actionTypes.LOAD_TOP_STORIES_FAIL:
            return {
                ...state,
                topStories: {
                    ...state.topStories,
                    loading: false,
                    error: payload,
                },
            }
        case actionTypes.LOAD_STORY_OFFSET:
            return {
                ...state,
                allStories: {
                    ...state.allStories,
                    offset: payload
                }
            };
        case actionTypes.LOAD_STORY_SUCCESS:
            return {
                ...state,
                allStories: {
                    ...state.allStories,
                    detail: [...state.allStories.detail, payload],
                    error: null,
                },
            }
        case actionTypes.LOAD_STORY_FAIL:
            return {
                ...state,
                allStories: {
                    ...state.allStories,
                    error: payload,
                },
            }
        default:
            return state;
    }
};
