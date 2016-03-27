var React = require('react');
import { Router, Route, Link, hashHistory } from 'react-router';

var Container = React.createClass({
	getInitialState: function() {
    return {
      container: ""
    };
  },
  
  componentDidMount: function() {
    this.serverRequest = $.get("/containers/"+this.props.params.id+".json", function (result) {
    	console.log(result);
      this.setState({
        container: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
  	var result = this.state.container;
    return (
    	<div>
	      <div>
	        {result.id} - {result.name}
	      </div>
	    </div>
    );
  }
});

module.exports = Container;