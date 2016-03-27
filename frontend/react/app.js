var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link, hashHistory } from 'react-router';

var App = require('./components/containers/App.jsx');
var Containers = require('./components/containers/Containers.jsx');
var Container = require('./components/containers/Container.jsx');

$(document).ready(function () {
  ReactDOM.render((
	  <Router history={hashHistory}>
	  	<Route path="/" component={App}/>	
	    <Route path="containers" component={Containers}/>
	    <Route path="containers/:id" component={Container} />
	  </Router>
	), document.getElementById('container'))
});
