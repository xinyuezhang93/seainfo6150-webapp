import styles from "./ArticleListItem.module.css";
import React from 'react';
import PropTypes from 'prop-types';

class ArticleListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            author: this.props.author,
            date: this.props.date,
            shortText: this.props.shortText,
            year: this.props.year
        }
    }

    render() {
        return(
            <li className = {styles.list_item}>
                
                <h1>{this.props.title}</h1>
                <p>{this.props.shortText}</p>
                <a rel="{this.props.author}" href = "/author">By: {this.props.author} </a>
                <br></br>
                <time dateTime = {this.props.year}>{this.props.date}</time>
                
            </li>
        );
    }
}

ArticleListItem.propTypes = {
    title:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    shortText:PropTypes.string.isRequired,
    year:PropTypes.string.isRequired,
}

export default ArticleListItem;
