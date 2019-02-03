import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = (props) => (
  <div>
  	<h1>{props.title}</h1>
  	<a rel = {props.author} href = "/author"> {props.author}  </a>
    <time datetime = {props.date} >{props.date}</time>
    <article>{props.children}</article>
  </div>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Article;
