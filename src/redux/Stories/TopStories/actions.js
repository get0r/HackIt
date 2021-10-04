import * as actionTypes from './action-types';
import * as ApiFunctions from '../../../api/hackerAPI';
import * as rootActions from '../../rootActions';

export const loadTopStories = () => {
    return async dispatch => {
        dispatch(rootActions.loadBegin(actionTypes.LOAD_TOP_STORIES_BEGIN));
        try {
            const storyList = await ApiFunctions.getTopStoriesList();
            const storyIdList = storyList.data;
            const storyDetailList = [];
            for (let i = 0; i < 4; i++) {
                const storyDetail = await ApiFunctions.getItemDetail(storyIdList[i]);
                storyDetailList.push(storyDetail.data);
            }
            dispatch(rootActions.loadSuccess(actionTypes.LOAD_TOP_STORIES_SUCCESS, {
                list: storyIdList,
                detail: storyDetailList,
            }));
        } catch (err) {
            dispatch(rootActions.loadFail(actionTypes.LOAD_TOP_STORIES_FAIL, err.message));
        }
    };
};

export const loadStory = () => {
    return async (dispatch, getState) => {
        dispatch(rootActions.loadBegin(actionTypes.LOAD_STORY_BEGIN));
        try {
            if (getState().stories.topStories.list.length === 0) {
                const topStoriesListRes = await ApiFunctions.getTopStoriesList();
                dispatch(rootActions.loadSuccess(actionTypes.LOAD_TOP_STORIES_SUCCESS, { list: topStoriesListRes.data, detail: [] }));
            }
            const index = getState().stories.allStories.offset;
            if (index > getState().stories.topStories.list.length) return;
            const itemId = getState().stories.topStories.list[index];
            const storyRes = await ApiFunctions.getItemDetail(itemId);
            dispatch(rootActions.loadBegin(actionTypes.INCREMENT_OFFSET));
            return dispatch(rootActions.loadSuccess(actionTypes.LOAD_STORY_SUCCESS, storyRes.data));
        } catch (error) {
            return dispatch(rootActions.loadSuccess(actionTypes.LOAD_STORY_FAIL, error));
        }
    };
};