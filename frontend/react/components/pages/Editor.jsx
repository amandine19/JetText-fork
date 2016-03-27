var React = require('react');
import { Router, Route, Link, hashHistory } from 'react-router';

var Editor = React.createClass({
  getInitialState: function() {
    return {
      page: '',
      contentValue: ''
    };
  },
  
  componentDidMount: function() {
    this.serverRequest = $.get("/pages/"+this.props.children.id+".json", function (result) {
      this.setState({
        page: result,
        contentValue: result.content
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
    var editor = CKEDITOR.instances['editor1'];
    if (editor) { editor.destroy(true); }
  },

  postData: function() {
    var page = this.state.page;
    $.ajax({
      type: "PUT",
      url: '/pages/update_ajax',
      data: { id: page.id, content: this.state.contentValue }
    });
  },

  unlock: function() {
    var that = this;
    var editor = CKEDITOR.replace('editor1');
    editor.on('change', function( evt ) {
      // setState to allow changes to be saved on submit
      that.setState({ contentValue: evt.editor.getData() });
    });
  },

  render: function() {
    var page = this.state.page;
    return (
      <div className="col-lg-12">
        <div id="editor1" dangerouslySetInnerHTML={createMarkup(page.content)} />
        <input type="button" onClick={this.postData} value="Save" />
        <input type="button" onClick={this.unlock} value="Edit" />
      </div>
    );
  }

});

function createMarkup(data) {
  return {__html: data};
};

module.exports = Editor;