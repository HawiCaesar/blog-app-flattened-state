import React from 'react';
import { Provider }  from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
		</Router>
	</Provider>
);

export default Root;