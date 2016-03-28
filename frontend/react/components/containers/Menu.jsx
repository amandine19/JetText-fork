var React = require('react');
import { Router, Route, Link, hashHistory } from 'react-router';

var Menu = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.items.map(function(page){
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

module.exports = Menu;