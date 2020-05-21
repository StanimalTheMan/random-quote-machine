import React from 'react';

import QuoteBox from './QuoteBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quotes: []
    };
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            quotes: result.quotes
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, quotes } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <QuoteBox loadedQuotes={quotes} />
        /*
        <ul>
          {quotes.map(quote => (
            <li key={quote.author}>
              {quote.author} {quote.quote}
            </li>
          ))}
        </ul>
        */
      );
    }
  }
}

export default App;

