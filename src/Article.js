import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = (props) => (
  <div>
    <h1>{props.title}</h1>
    <h4>{props.date}</h4>
    <h3>{props.author}</h3>
    <p>{props.children}</p>
  </div>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Article;
