import React from 'react';
import PropTypes from 'prop-types';

class ArticleTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: this.props.title,
      author: this.props.author,
      date: this.props.date,
      shortText: this.props.shortText,
      selected: false
    }
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
          <label>{this.state.title}</label>
        </td>
        <td>{selectedStatus}</td>
        <td><address><a rel = {this.state.author} href = {"/author/" + this.state.author}>{this.state.author}</a></address></td>
        <td width = "11%" ><time datetime = "2018" >{this.state.date}</time></td>
        <td>{this.state.shortText}</td>
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
