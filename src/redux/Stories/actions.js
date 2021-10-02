import * as actionTypes from './action-types';
import * as ApiFunctions from '../../api/hackerAPI';

const loadTopStoriesBegin = () => {
    return {
        type: actionTypes.LOAD_TOP_STORIES_BEGIN,
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
                const storyDetail = await ApiFunctions.getItemDetail(storyIdList[i]);
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

const loadStoryBegin = () => {
    return {
        type: actionTypes.LOAD_STORY_BEGIN
    }
};

const loadStorySuccess = story => {
    return {
        type: actionTypes.LOAD_STORY_SUCCESS,
        payload: story
    };
};

const loadStoryFail = err => {
    return {
        type: actionTypes.LOAD_STORY_FAIL,
        payload: err,
    };
};

const IncrementStoryOffset = () => {
    return {
        type: actionTypes.INCREMENT_OFFSET,
    };
};

export const loadStory = () => {
    return async (dispatch, getState) => {
        dispatch(loadStoryBegin());
        try {
            if (getState().stories.topStories.list.length === 0) {
                const topStoriesListRes = await ApiFunctions.getTopStoriesList();
                dispatch(loadTopStoriesSuccess({ list: topStoriesListRes.data, detail: [] }));
            }
            const index = getState().stories.allStories.offset;
            if (index > getState().stories.topStories.list.length) return;
            const itemId = getState().stories.topStories.list[index];
            const storyRes = await ApiFunctions.getItemDetail(itemId);
            dispatch(IncrementStoryOffset());
            return dispatch(loadStorySuccess(storyRes.data));
        } catch (error) {
            return dispatch(loadStoryFail(error));
        }
    };
};