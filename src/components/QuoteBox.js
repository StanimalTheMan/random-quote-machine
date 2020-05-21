import React from 'react';

import './QuoteBox.css'

class QuoteBox extends React.Component {
  state = { quote: this.props.loadedQuotes[Math.floor(Math.random() * this.props.loadedQuotes.length)] };

  randomizeQuote = () => {
    this.setState({quote: this.props.loadedQuotes[Math.floor(Math.random() * this.props.loadedQuotes.length)]});
  }

  render() {
    return (
      <div id="quote-box" class="center">
        <div id="text">
          {this.state.quote.quote}
        </div>
        <div id="author">
          {this.state.quote.author}
        </div>
        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.state.quote.quote}"${this.state.quote.author}`} id="tweet-quote">Tweet</a>
        <button type="button" id="new-quote" onClick={this.randomizeQuote}>New Quote</button>
      </div>
    );
  }
}

export default QuoteBox;