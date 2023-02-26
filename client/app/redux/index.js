import { combineReducers } from 'redux';
import projectReducer from './projects';

const appReducer = combineReducers({
  projects: projectReducer,
});

export default appReducer;
