
import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route, Switch, Redirect,
} from 'react-router-dom';
import Home from 'Components/home';

const Layout = (props) => {

	return (
		<Fragment>
			 <Router basename="/">
				 <Fragment>
					 <Switch>
						 <Route path="/" exact component={Home} />
					 </Switch>
				 </Fragment>
			 </Router>
		</Fragment>
	);
};



export default Layout;
