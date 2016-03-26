var React = require('react');

var Container = React.createClass({

  getInitialState: function() {
    return {
      node: 'container_'+this.props.data.id
    }
  },

  render: function() {
    var text = this.state.editable ? 'editable' : 'not editable';
    return (
      <ul key={this.props.data.id}>
        <li>{text}</li>
        <li onClick={this.updateContainer}>{this.props.data.name}</li>
        <li><div id={'container_'+this.props.data.id} dangerouslySetInnerHTML={{__html: this.props.data.description}} onClick={this.handleClick} /></li>
        <li>{this.props.data.user.email}</li>
      </ul>
    )
  }
});

var ContainersList = React.createClass({
  getInitialState: function() {
    return {
      containersList: []
    };
  },
  
  componentDidMount: function() {
    /* loading json data from the source defined in Containers.jsx */
    $.get(this.props.source, function(result) {
      if (this.isMounted()) {
        this.setState({
          containersList: result
        });
      }
    }.bind(this));
  },
  
  render: function() {
    var containersListItems = this.state.containersList.map(function(item){
      return (
        <div>
          <Container key={item.id} data={item} />
        </div>
      )
    });
          
    return (
      <div>
        {containersListItems}
      </div>
    );
  }

});

module.exports = ContainersList;