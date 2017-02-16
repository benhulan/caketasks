var React = require('react');

var TaskList = React.createClass({
  handleDelete: function() {
    this.props.onDelete(this.props.whichItem);
  },
  handleEdit: function() {
    this.props.onEdit(this.props.whichItem);
  },
  toggleDone: function() {
    this.props.onCheck(this.props.whichItem);
  },
  render: function() {
    return(
      <li className="task-item media">
        <div className="task-info media-body">
          <div className="task-head">
            <span className="task-name">{this.props.singleItem.taskName}</span>
            <span className="due-date pull-right">{this.props.singleItem.dueDate}</span>
          </div>
          <div className="task-subject"><span className="label-item">Subject:</span>{this.props.singleItem.taskSubject}</div>
          <div className="task-effort"><span className="label-item">Effort:</span>{this.props.singleItem.taskEffort}</div>
          <div className="task-notes"><span className="label-item">Notes:</span>{this.props.singleItem.taskNotes}</div>
        </div>
        <div className="media-right">
          <button className="task-delete btn btn-xs btn-success" onClick={this.toggleDone}>
          <span className={"glyphicon glyphicon-" + (this.props.singleItem.checkedState === false ? "unchecked" : "check")}></span></button>
          <button className="task-edit btn btn-xs btn-info" onClick={this.handleEdit}>
          <span className="glyphicon glyphicon-edit"></span></button>
          <button className="task-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
          <span className="glyphicon glyphicon-remove-circle"></span></button>
        </div>
      </li>
    )
  }
});

module.exports = TaskList;
