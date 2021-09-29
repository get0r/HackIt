import * as actionTypes from './action-types';

const INITIAL_STATE = {
    topJobs: {
        list: [],
        detail: [],
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
        default:
            return state;
    }
};
