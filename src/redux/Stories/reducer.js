import * as topActionTypes from './TopStories/action-types';
import * as newActionTypes from './NewStories/action-types';

const INITIAL_STATE = {
    topStories: {
        list: [],
        detail: [],
        loading: false,
        error: null,
    },
    newStories: {
        list: [],
        detail: [],
        loading: false,
        error: null,
    },
    allStories: {
        detail: [],
        offset: 0,
        loading: false,
        error: null,
    }
};

export const storiesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case topActionTypes.LOAD_TOP_STORIES_BEGIN:
            return {
                ...state,
                topStories: {
                    ...state.topStories,
                    loading: true,
                }
            };
        case topActionTypes.LOAD_TOP_STORIES_SUCCESS:
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
        case topActionTypes.LOAD_TOP_STORIES_FAIL:
            return {
                ...state,
                topStories: {
                    ...state.topStories,
                    loading: false,
                    error: payload,
                },
            }
        case newActionTypes.LOAD_NEW_STORIES_BEGIN:
            return {
                ...state,
                newStories: {
                    ...state.newStories,
                    loading: true,
                }
            };
        case newActionTypes.LOAD_NEW_STORIES_SUCCESS:
            return {
                ...state,
                newStories: {
                    ...state.newStories,
                    list: [...payload.list],
                    detail: [...state.newStories.detail, ...payload.detail],
                    loading: false,
                    error: null,
                },
            }
        case newActionTypes.LOAD_NEW_STORIES_FAIL:
            return {
                ...state,
                newStories: {
                    ...state.newStories,
                    loading: false,
                    error: payload,
                },
            }
        case topActionTypes.INCREMENT_OFFSET:
            return {
                ...state,
                allStories: {
                    ...state.allStories,
                    offset: state.allStories.offset + 1,
                }
            };
        case topActionTypes.LOAD_STORY_BEGIN:
            return {
                ...state,
                allStories: {
                    ...state.allStories,
                    loading: true,
                }
            };
        case topActionTypes.LOAD_STORY_SUCCESS:
            return {
                ...state,
                allStories: {
                    ...state.allStories,
                    detail: [...state.allStories.detail, payload],
                    error: null,
                    loading: false,
                },
            }
        case topActionTypes.LOAD_STORY_FAIL:
            return {
                ...state,
                allStories: {
                    ...state.allStories,
                    loading: false,
                    error: payload,
                },
            }
        default:
            return state;
    }
};
