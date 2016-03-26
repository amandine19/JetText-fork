var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link, hashHistory } from 'react-router';

var App = require('./components/containers/App.jsx');
var Containers = require('./components/containers/Containers.jsx');

$(document).ready(function () {
  ReactDOM.render((
	  <Router history={hashHistory}>
	  	<Route path="/" component={App}/>
	    <Route path="/containers" component={Containers}/>
	  </Router>
	), document.getElementById('container'))
});
