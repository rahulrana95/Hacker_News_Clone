// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import NewStories from './NewStories.js';




let rootReducers=combineReducers({
	NewStories:NewStories


});


export default rootReducers;