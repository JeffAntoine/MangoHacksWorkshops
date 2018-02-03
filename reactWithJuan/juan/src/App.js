import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

var TWEET_LIMIT = 60;


class App extends Component {

  state = {
    myTweet: ""
  }

  
handleClick = (clickEvent) =>{
  alert(this.state.myTweet);
}


  handleChange = (changeEvent) => {
    //console.log(changeEvent);
    this.setState({
      myTweet: changeEvent.target.value
    });
  }

  render() {
    return (
      <div className="App">
      <h1>{this.state.myTweet}</h1>
       <textarea
       placeholder = "whats on your mind"       
       value = {this.state.myTweet}
       onChange= {this.handleChange}/>
        <br />
        <span>{TWEET_LIMIT - this.state.myTweet.length}</span> 
        <br />
        {this.state.myTweet.length >0? "show button": ""}
        <button onClick= {this.handleClick}>Tweet</button>: ""}
      </div>
    );
  }
}

export default App;
