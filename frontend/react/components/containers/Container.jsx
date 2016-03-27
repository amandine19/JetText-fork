var React = require('react');
import { Router, Route, Link, hashHistory } from 'react-router';

var Container = React.createClass({
	getInitialState: function() {
    return {
      container: "",
      pages: []
    };
  },
  
  componentDidMount: function() {
    this.serverRequest = $.get("/containers/"+this.props.params.id+".json", function (result) {
      this.setState({
        container: result.container,
        pages: result.pages
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
  	var container = this.state.container;
  	var pages = this.state.pages;
    return (
    	<div>
	      <div key={container.id}>
	        {container.id} - {container.name} - {container.content}
	      </div>
	      {pages.map(function(page){
          return (
            <li key={page.id}>
              <Link to={"/pages/"+page.id}>{page.name}</Link>
            </li>
          );
        })}
	    </div>
    );
  }
});

module.exports = Container;