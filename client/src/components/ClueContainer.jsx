var React = require('react');
var ImageList = require('./ImageList');

var ClueContainer = React.createClass({

  getInitialState: function(){

    var questions = [
      "Is one female?",
      "Is one male?",
      "Is one considered a young Royal?",
      "Is one balding?"
    ]

    return { 
      correctRoyal: null,
      royals: [], 
      questions: questions, 
      selectedQuestion: null,
      questionAnswer: null,
    }
  },

  componentDidUpdate: function() {
    if (this.state.correctRoyal === null) {
    const randomRoyal = this.state.royals[Math.floor(Math.random() * this.state.royals.length)];
    this.setState({correctRoyal: randomRoyal})
    }
  },

  setSelectedQuestion: function(index) {
      this.setState({ selectedClue: index }, function respondToQuestion() {        
        var index = this.state.selectedQuestion;
        var response = this.state.questions[index];
        this.setState({questionAnswer: response});    
      }.bind(this)); 
  },

  render: function(){
    return(
    <div>  
      <ImageList royals={this.props.royals}></ImageList>
      <div className="questions">
        <h2>Ask A Question</h2>
        <QuestionSelector royals={this.state.royals} questions={this.state.questions} selectedQuestion={this.setSelectedQuestion}/>
        <QuestionAnswer answer={this.state.questionAnswer}/>
      </div>
    </div>
    )
  }

})

module.exports = ClueContainer;