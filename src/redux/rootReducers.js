import { combineReducers } from "redux";
import { storiesReducer } from './Stories/reducer';

const rootReducer = combineReducers({
    stories: storiesReducer,
});

export default rootReducer;
