var React = require('react');
var ReactDOM = require('react-dom');
var Containers = require('./components/containers/Containers.jsx');

$(document).ready(function () {
  ReactDOM.render(
    <Containers />,
    document.getElementById('container')
  );
});
