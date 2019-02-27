import React, { Component } from 'react';
import ArticleList from './ArticleList/ArticleList.js';
import articles from './data/articles.json';
import RedHeader from './RedHeader.js';
import RedFooter from './RedFooter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RedHeader />
        <ArticleList articles={articles} />
        <RedFooter />
      </div>
    );
  }
}

export default App;
