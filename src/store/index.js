import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducers from '../reducers/index.js'
import Saga from './Saga.js';
import thunkMiddleware from  'redux-thunk';
import {LoadNewStories} from '../actions/LoadNewStories';
const sagaMiddleware = createSagaMiddleware();




let store=createStore(rootReducers,
  									applyMiddleware(sagaMiddleware,thunkMiddleware));



store.subscribe(()=>{

	console.log('Dispacther Fired subscrie');

});

//store.dispatch(selectSubreddit('reactjs'))


sagaMiddleware.run(Saga);
// store.runSaga=sagaMiddleware.run;

export default store;






