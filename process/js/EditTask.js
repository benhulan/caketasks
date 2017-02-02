var React = require('react');
// var tether = require('tether');
var bootstrap = require('bootstrap');

// var defaultDate = new Date();
// defaultDate.setDate(defaultDate.getDate() + 14);

function formatDate(date, divider) {
  var someday = new Date(date);
  var month = someday.getUTCMonth() + 1;
  var day = someday.getUTCDate();
  var year = someday.getUTCFullYear();

  if (month <= 9) { month = '0' + month; }
  if (day <= 9) { day = '0' + day; }

  return ('' + year + divider + month + divider + day);
}

var EditTask = React.createClass({

  toggleEditTaskDisplay: function() {
    this.props.handleToggle();
  },

  getEffort: function() {
    this.props.onEffortChange(this.props.singleItem.taskEffort);
  },

  handleEdit: function(e) {
    e.preventDefault();
    var tempItem = {
      taskName: this.inputTaskName.value,
      taskSubject: this.inputTaskSubject.value,
      dueDate: this.inputDueDate.value + ' ' + this.inputDueTime.value,
      taskEffort: this.inputTaskEffort.value,
      taskNotes: this.inputTaskNotes.value,
    } //tempitems

    this.props.editTask(tempItem);

    this.inputTaskName.value = '';
    this.inputTaskSubject.value = '';
    this.inputDueDate.value = formatDate(defaultDate, '-');
    this.inputDueTime.value = '08:15';
    this.inputTaskEffort.value = '0';
    this.inputTaskNotes.value = '';
    
  }, //handleEdit

  render: function() {
    return(
      <div className="modal fade" id="editTask" tabIndex="-2" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.toggleEditTaskDisplay} aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Edit an Existing Task:</h4>
            </div>
            <form className="modal-body edit-task form-horizontal" onSubmit={this.handleEdit}>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="taskName">Task</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control"
                    id="taskName" ref={(ref) => this.inputTaskName = ref } placeholder="{this.inputTaskName}" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="taskSubject">Subject</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control"
                    id="taskSubject"  ref={(ref) => this.inputTaskSubject = ref } placeholder="{this.inputTaskSubject}" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="dueDate">Date Due</label>
                <div className="col-sm-9">
                  <input type="date" className="form-control"
                    id="dueDate"  ref={(ref) => this.inputDueDate = ref }
                    defaultValue={this.inputDueDate} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="dueTime">Time Due</label>
                <div className="col-sm-9">
                  <input type="time" className="form-control"
                    id="dueTime"  ref={(ref) => this.inputDueTime = ref } defaultValue={this.inputDueTime} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="taskEffort">Effort</label>
                <div className="col-sm-9">
                    <input id="taskEffort" onChange={this.getEffort} ref={(ref) => this.inputTaskEffort = ref} defaultValue={this.inputTaskEffort} type="text" name="taskEffort" data-provide="slider" data-slider-min="0" data-slider-max="5" data-slider-step="1" data-slider-value="0" />
                    <span className="toolbar-item-button glyphicon glyphicon-question-sign"></span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="taskNotes">Notes</label>
                <div className="col-sm-9">
                  <textarea className="form-control" rows="4" cols="50"
                    id="taskNotes"  ref={(ref) => this.inputTaskNotes = ref } placeholder="{this.inputTaskNotes}"></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                  <div className="pull-right">
                    <button type="button" className="btn btn-default"  onClick={this.toggleEditTaskDisplay}>Cancel</button>&nbsp;
                    <button type="submit" className="btn btn-primary">Update Task</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    ) //return
  } //render
}); //EditTask

module.exports=EditTask;
