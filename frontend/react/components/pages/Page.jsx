var React = require('react');
import { Router, Route, Link, hashHistory } from 'react-router';

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

    var that = this;

    tinymce.init({
      selector: '#editor1',
      plugins: "code link visualblocks table uploader formula glossary",
      menubar: false,
      extended_valid_elements: "span[!class]",
      toolbar: "undo redo | formatselect | link code table | uploader formula glossary",
      visualblocks_default_state: false, //show info boxes around elements 
      force_br_newlines: false,
      force_p_newlines: true,
      forced_root_block: '',
      content_css: '/assets/bootstrap/dist/css/bootstrap.min.css',
      setup: function(editor) {
        editor.on('init', function(args) {
          that.setState({ contentValue: editor.getContent() });
          editor.setContent(that.state.contentValue);
        });
        editor.on('change', function(ed) {
          that.setState({ contentValue: editor.getContent() });
        });
      }
    });
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
    //tinymce.remove('#editor1');
  },

  postData: function() {
    var page = this.state.page;
    $.ajax({
      type: "PUT",
      url: '/pages/update_ajax',
      data: { id: page.id, content: this.state.contentValue }
    });
  },

  render: function() {
    var page = this.state.page;
    return (
      <div className="col-lg-12">
        <div id="editor1" dangerouslySetInnerHTML={createMarkup(page.content)}/>
        <input type="button" onClick={this.postData} value="Save" />
      </div>
    );
  }

});

function createMarkup(data) {
  return {__html: data};
};

module.exports = Page;