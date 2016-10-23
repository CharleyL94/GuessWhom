var React = require('react');
var ImageList = require('./ImageList');
var ClueContainer = require('./ClueContainer');
var ResultContainer = require('./ResultContainer');

var TopContainer = React.createClass({

  getInitialState: function(){
    return {royals: []};
  },

  componentDidMount: function() {
    var url = "api/royals";
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = function() {
        console.log(request.responseText);
        var data = JSON.parse(request.responseText);
        this.setState({ royals: data });
      }.bind(this);
    request.send();
  },

  render: function(){
    return(
      <div>
      <h1> Guess The Royal</h1>
        <RoyalsList royals = {this.state.royals} />
       
      </div>
    )
  }

})

module.exports = TopContainer;