import * as actionTypes from './action-types';
import * as ApiFunctions from '../../api/hackerAPI';
import * as rootActions from '../rootActions';

export const loadTopJobs = () => {
    return async dispatch => {
        dispatch(rootActions.loadBegin(actionTypes.LOAD_TOP_JOBS_BEGIN));
        try {
            const jobList = await ApiFunctions.getTopJobsList();
            const jobIdList = jobList.data;
            const jobDetailList = [];
            for (let i = 0; i < 4; i++) {
                const jobDetail = await ApiFunctions.getItemDetail(jobIdList[i]);
                jobDetailList.push(jobDetail.data);
            }
            dispatch(rootActions.loadSuccess(actionTypes.LOAD_TOP_JOBS_SUCCESS, {
                list: jobIdList,
                detail: jobDetailList,
            }));
        } catch (err) {
            dispatch(rootActions.loadFail(actionTypes.LOAD_TOP_JOBS_FAIL, err.message));
        }
    };
};

export const loadJob = () => {
    return async (dispatch, getState) => {
        dispatch(rootActions.loadBegin(actionTypes.LOAD_JOB_BEGIN));
        try {
            if (getState().jobs.topJobs.list.length === 0) {
                const topJobsListRes = await ApiFunctions.getTopJobsList();
                dispatch(rootActions.loadSuccess(actionTypes.LOAD_TOP_JOBS_SUCCESS, { list: topJobsListRes.data, detail: [] }));
            }
            const index = getState().jobs.allJobs.offset;
            if (index > getState().jobs.topJobs.list.length) return;

            const itemId = getState().jobs.topJobs.list[index];
            const jobRes = await ApiFunctions.getItemDetail(itemId);
            dispatch(rootActions.loadBegin(actionTypes.INCREMENT_JOB_OFFSET));
            return dispatch(rootActions.loadSuccess(actionTypes.LOAD_JOB_SUCCESS, jobRes.data));
        } catch (error) {
            return dispatch(rootActions.loadFail(actionTypes.LOAD_JOB_FAIL, error));
        }
    };
};