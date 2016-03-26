var React = require('react');
var Containers = require('./components/containers/Containers.jsx');

$(document).ready(function () {
  React.render(
    <Containers />,
    document.getElementById('container')
  );
});
