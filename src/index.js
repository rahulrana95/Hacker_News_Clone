import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root.js';
import {Provider} from  'react-redux';
import Home from './containers/Home';
import store from './store/index.js'; 

import  {Router,Route,IndexRoute} from 'react-router';
import './index.css';


ReactDOM.render(
				<Provider store={store}>

					<Router>
					    <Route path="/" component={Root}>
					     <IndexRoute  component={Home} />
					     <Route path="home" component={Home} >
					     </Route> 

					    </Route>
					  </Router>
					
				</Provider>	, document.getElementById('root'));

