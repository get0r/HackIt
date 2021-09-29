import { combineReducers } from "redux";
import { storiesReducer } from './Stories/reducer';
import { jobsReducer } from './Jobs/reducer';

const rootReducer = combineReducers({
    stories: storiesReducer,
    jobs: jobsReducer,
});

export default rootReducer;
