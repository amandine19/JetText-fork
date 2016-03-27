var React = require('react');
import { Router, Route, Link, hashHistory } from 'react-router';

var Page = React.createClass({
  getInitialState: function() {
    return {
      page: ""
    };
  },
  
  componentDidMount: function() {
    this.serverRequest = $.get("/pages/"+this.props.params.id+".json", function (result) {
      console.log(result);
      this.setState({
        page: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  
  render: function() {
    var page = this.state.page;
    return (
      <div>
        <div>
          {page.id} - {page.name}
        </div>
        <div dangerouslySetInnerHTML={createMarkup(page.content)} />
      </div>
    );
  }
});

function createMarkup(data) {
  return {__html: data};
};

module.exports = Page;