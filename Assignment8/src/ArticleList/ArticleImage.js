import "./ArticleImage.module.css";
import React from 'react';
import PropTypes from 'prop-types';

class ArticleImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url: this.props.data.url,
            title: this.props.data.title
        }
    }

    render() {
        return(
           
            <img src={this.state.url} alt="image"/>
           
        );
    }
}

ArticleImage.propTypes = {
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}

export default ArticleImage;
