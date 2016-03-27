var React = require('react');
import { Router, Route, Link, hashHistory } from 'react-router';
var Editor = require('./Editor.jsx');

var Page = React.createClass({
  getInitialState: function() {
    return {
      page: '',
      contentValue: ''
    };
  },
  
  componentDidMount: function() {
    this.serverRequest = $.get("/pages/"+this.props.params.id+".json", function (result) {
      this.setState({
        page: result,
        contentValue: result.content
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var page = this.state.page;
    return (
      <div className="col-lg-12">
        <Link to={"/containers/"+page.container_id}>Containers</Link>
        <Editor>
          {this.props.params}
        </Editor>
      </div>
    );
  }

});

module.exports = Page;