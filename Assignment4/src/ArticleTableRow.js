import React from 'react';
import PropTypes from 'prop-types';

class ArticleTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title
    this.author = props.author;
    this.date = props.date;
    this.shortText = props.shortText;
    this.state = {
      selected: false
    };

  }

  onClick() {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {

    let selectedStatus;
    if (this.state.selected) {
      selectedStatus = 'Yes';
    }
    else {
      selectedStatus = 'No';
    }

    // paste this onClick handler into your checkbox;
    // you should not have to modify this code in any way
    // onClick={this.onClick.bind(this)}
    //
    return (
      <tr height="50">
        <td width = "20%">
          <input type="checkbox" onClick={this.onClick.bind(this)}/>
          <label>{this.title}</label>
        </td>
        <td>{selectedStatus}</td>
        <td><a id = "aut" rel = {this.author} href = {"/author/" + this.author}>{this.author}</a></td>
        <td width = "11%" ><time datetime = {this.date} >{this.date}</time></td>
        <td>{this.shortText}</td>
      </tr>
    );
  }

}

ArticleTableRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleTableRow;
