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
