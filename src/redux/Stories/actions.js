import * as actionTypes from './action-types';
import * as ApiFunctions from '../../api/hackerAPI';

const loadTopStoriesBegin = () => {
    return {
        type: actionTypes.LOAD_TOP_STORIES_BEGIN,
        payload: null,
    };
};

const loadTopStoriesSuccess = ({ list, detail }) => {
    return {
        type: actionTypes.LOAD_TOP_STORIES_SUCCESS,
        payload: { list, detail },
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
        try {
            const storyList = await ApiFunctions.getTopStoriesList();
            const storyIdList = storyList.data;
            const storyDetailList = [];
            for (let i = 0; i < 4; i++) {
                const storyDetail = await ApiFunctions.getTopStoriesDetail(storyIdList[i]);
                storyDetailList.push(storyDetail.data);
            }
            dispatch(loadTopStoriesSuccess({
                list: storyIdList,
                detail: storyDetailList,
            }));
        } catch (err) {
            dispatch(loadTopStoriesFail(err.message));
        }
    };
};