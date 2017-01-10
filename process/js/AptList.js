var React = require('react');

var AptList = React.createClass({
  handleDelete: function() {
    this.props.onDelete(this.props.whichItem);
  },
  render: function() {
    return(
      <li className="pet-item media">
        <div className="media-left">
          <button className="pet-delete btn btn-xs btn-success" onClick={this.handleDelete}>
          <span className="glyphicon glyphicon-ok-circle"></span></button>
        </div>
        <div className="pet-info media-body">
          <div className="pet-head">
            <span className="pet-name">{this.props.singleItem.petName}</span>
            <span className="apt-date pull-right">{this.props.singleItem.aptDate}</span>
          </div>
          <div className="owner-name"><span className="label-item">Subject:</span>
          {this.props.singleItem.ownerName}</div>
          <div className="apt-effort"><span className="label-item">Effort:</span>
          {this.props.singleItem.aptEffort}</div>
          <div className="apt-notes">{this.props.singleItem.aptNotes}</div>
        </div>
      </li>
    )
  }
});

module.exports = AptList;
