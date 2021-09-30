import { combineReducers } from "redux";
import { storiesReducer } from './Stories/reducer';
import { jobsReducer } from './Jobs/reducer';
import { connectRouter } from 'connected-react-router';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    stories: storiesReducer,
    jobs: jobsReducer,
});

export default createRootReducer;
