import * as actionTypes from './action-types';

const INITIAL_STATE = {
    topJobs: {
        list: [],
        detail: [],
        loading: false,
        error: null,
    },
    allJobs: {
        detail: [],
        offset: 0,
        loading: false,
        error: null,
    }
};

export const jobsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.LOAD_TOP_JOBS_BEGIN:
            return {
                ...state,
                topJobs: {
                    ...state.topJobs,
                    loading: true,
                }
            };
        case actionTypes.LOAD_TOP_JOBS_SUCCESS:
            return {
                ...state,
                topJobs: {
                    ...state.topJobs,
                    list: [...payload.list],
                    detail: [...state.topJobs.detail, ...payload.detail],
                    loading: false,
                    error: null,
                },
            }
        case actionTypes.LOAD_TOP_JOBS_FAIL:
            return {
                ...state,
                topJobs: {
                    ...state.topJobs,
                    loading: false,
                    error: payload,
                },
            }
        case actionTypes.INCREMENT_JOB_OFFSET:
            return {
                ...state,
                allJobs: {
                    ...state.allJobs,
                    offset: state.allJobs.offset + 1,
                }
            };
        case actionTypes.LOAD_JOB_BEGIN:
            return {
                ...state,
                allJobs: {
                    ...state.allJobs,
                    loading: true,
                }
            };
        case actionTypes.LOAD_JOB_SUCCESS:
            return {
                ...state,
                allJobs: {
                    ...state.allJobs,
                    detail: [...state.allJobs.detail, payload],
                    error: null,
                    loading: false,
                },
            }
        case actionTypes.LOAD_JOB_FAIL:
            return {
                ...state,
                allJobs: {
                    ...state.allJobs,
                    loading: false,
                    error: payload,
                },
            }
        default:
            return state;
    }
};
