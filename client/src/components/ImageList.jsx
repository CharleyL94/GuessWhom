var React = require('react');
var RoyalImage = require('./RoyalImage');

var ImageList = React.createClass({

  createList: function(){
    var imageList = this.props.royals.map(function(royal, index){
      return <Royal image={royal.image} key={index}/>
    })
    return royalList;
  },

  render: function(){
    var royalList = this.createList();
    return (
        <div>{royalList}</div>
      )
  }

})


module.exports = ImageList