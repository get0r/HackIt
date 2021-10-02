import * as actionTypes from './action-types';
import * as ApiFunctions from '../../api/hackerAPI';

const loadTopJobsBegin = () => {
    return {
        type: actionTypes.LOAD_TOP_JOBS_BEGIN,
    };
};

const loadTopJobsSuccess = ({ list, detail }) => {
    return {
        type: actionTypes.LOAD_TOP_JOBS_SUCCESS,
        payload: { list, detail },
    };
};

const loadTopJobsFail = (error) => {
    return {
        type: actionTypes.LOAD_TOP_JOBS_FAIL,
        payload: error,
    };
};

export const loadTopJobs = () => {
    return async dispatch => {
        dispatch(loadTopJobsBegin());
        try {
            const jobList = await ApiFunctions.getTopJobsList();
            const jobIdList = jobList.data;
            const jobDetailList = [];
            for (let i = 0; i < 4; i++) {
                const jobDetail = await ApiFunctions.getItemDetail(jobIdList[i]);
                jobDetailList.push(jobDetail.data);
            }
            dispatch(loadTopJobsSuccess({
                list: jobIdList,
                detail: jobDetailList,
            }));
        } catch (err) {
            dispatch(loadTopJobsFail(err.message));
        }
    };
};

const loadJobBegin = () => {
    return {
        type: actionTypes.LOAD_JOB_BEGIN
    }
};

const loadJobSuccess = job => {
    return {
        type: actionTypes.LOAD_JOB_SUCCESS,
        payload: job
    };
};

const loadJobFail = err => {
    return {
        type: actionTypes.LOAD_JOB_FAIL,
        payload: err,
    };
};

const IncrementJobOffset = err => {
    return {
        type: actionTypes.INCREMENT_JOB_OFFSET,
        payload: err,
    };
};


export const loadJob = () => {
    return async (dispatch, getState) => {
        dispatch(loadJobBegin());
        try {
            if (getState().jobs.topJobs.list.length === 0) {
                const topJobsListRes = await ApiFunctions.getTopJobsList();
                dispatch(loadTopJobsSuccess({ list: topJobsListRes.data, detail: [] }));
            }
            const index = getState().jobs.allJobs.offset;
            if (index > getState().jobs.topJobs.list.length) return;

            const itemId = getState().jobs.topJobs.list[index];
            const jobRes = await ApiFunctions.getItemDetail(itemId);
            dispatch(IncrementJobOffset());
            return dispatch(loadJobSuccess(jobRes.data));
        } catch (error) {
            return dispatch(loadJobFail(error));
        }
    };
};