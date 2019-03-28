import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRouter({ component: Component, isLogin, ...rest }) {
	return <Route {...rest} component={(props) =>  isLogin ? <Component {...props} /> : <Redirect to="/login" /> } />
}

const mapStateToProps = ({ auth: { isLogin } }) => ({ isLogin });

export default connect(mapStateToProps)(PrivateRouter);