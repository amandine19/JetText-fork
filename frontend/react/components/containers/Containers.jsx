var React = require('react');
var ContainersList = require('./ContainersList.jsx');

var Containers = React.createClass({
  getInitialState: function() {
    return {
      containersList: []
    };
  },
  
  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      this.setState({
        containersList: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var results = this.state.containersList;
    return (
      <div>
        {results.map(function(result){
          return <li key={result.id}>{result.name}</li>;
        })}
      </div>
    );
  }
});

module.exports = Containers;