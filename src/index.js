import "./rescourse/css/index.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { Provider} from 'react-redux';
import HelloWorld from './common/components/HelloWorld';
import App from './containers/App';
import configureStore from './stores/configStore';

const store = configureStore();

render(
  <Provider store={store}>
  	<div>
	  	<HelloWorld />
	    <App />
    </div>
  </Provider>,
  document.getElementById('app')
);