import React, { Component } from 'react';
import '../css/Question.css';
// import components

// Do something with the questions

class Question extends Component {
constructor(props){
  super(props);
  this.state = { ask: "show"} 
}
  WhenClick(){;
    this.setState({ ask: "dontShow"});
    console.log(this.state.ask);
  }


  render() {
    
    return (
      <div>
         <h1> {this.props.Question.question_text} </h1>
         <ul id="container">
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
         </ul>
      </div>
    );
  }
}


export default Question;