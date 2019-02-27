import React from 'react';
import PropTypes from 'prop-types';
import style from './RedFooter.module.css';

const RedFooter = ({}) => (
  <footer className = {style.red_footer}>
     <span>&copy;</span>
     <time className = {style.footer_time} dateTime = "2019"> 2019, </time>
     <address>&nbsp; April Bingham</address>
  </footer>
);

RedFooter.propTypes = {
};

export default RedFooter;
