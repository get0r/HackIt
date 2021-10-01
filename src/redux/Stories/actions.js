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

const loadStoryOffset = offset => {
    return {
        type: actionTypes.LOAD_STORY_OFFSET,
        payload: offset
    };
};

export const loadStory = () => {
    return async (dispatch, getState) => {
        try {
            if (getState().stories.allStories.offset === 0) {
                const offsetRes = await ApiFunctions.getStoryOffset();
                dispatch(loadStoryOffset(offsetRes.data));
            }

            const storyRes = await ApiFunctions.getItemDetail(getState().stories.allStories.offset);
            dispatch(loadStorySuccess(storyRes.data));
        } catch (error) {
            dispatch(loadStoryFail(error));
        }
    }
}