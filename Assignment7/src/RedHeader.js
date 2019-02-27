import React from 'react';
import PropTypes from 'prop-types';
import style from './RedHeader.module.css';

const RedHeader = ({}) => (
  <header className = {style.red_header}>
     <h2>The INFO6150 News</h2>
     <time dateTime = "2019">Wed. February 20, 2019</time>
  </header>
);

RedHeader.propTypes = {
};

export default RedHeader;
