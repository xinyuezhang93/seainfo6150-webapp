import styles from './ArticleList.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import ArticleImage from './ArticleImage';



let ArticleList = ({ articles }) => (
  <div className = {styles.article_list}>
  <ul>
    {
        // this iterates through the articles JSON and
        // calls your ArticleListItem component for each article
        Object.values(articles).map(article => {
          return <ArticleListItem
              key={article.slug}
              title={article.title}
              date={article.pubDate}
              year={article.pubYear}
              author={article.author}
              shortText={article.shortText}
              url = {article.image._url}
            />
        })
      }
    </ul>
    </div>
);

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
}
ArticleImage.propTypes = {
  articles: PropTypes.object.isRequired
}

export default ArticleList;



