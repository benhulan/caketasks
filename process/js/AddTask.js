var React = require('react');
// var tether = require('tether');
var bootstrap = require('bootstrap');

var defaultDate = new Date();
defaultDate.setDate(defaultDate.getDate() + 14);

function formatDate(date, divider) {
  var someday = new Date(date);
  var month = someday.getUTCMonth() + 1;
  var day = someday.getUTCDate();
  var year = someday.getUTCFullYear();

  if (month <= 9) { month = '0' + month; }
  if (day <= 9) { day = '0' + day; }

  return ('' + year + divider + month + divider + day);
}

var AddAppointment = React.createClass({

  toggleAptDisplay: function() {
    this.props.handleToggle();
  },

  getEffort: function() {
    this.props.onEffortChange(this.props.singleItem.taskEffort);
  },

  handleAdd: function(e) {
    e.preventDefault();
    var tempItem = {
      taskName: this.inputTaskName.value,
      ownerName: this.inputTaskSubject.value,
      dueDate: this.inputDueDate.value + ' ' + this.inputDueTime.value,
      taskEffort: this.inputEffort.value,
      taskNotes: this.inputTaskNotes.value,
    } //tempitems

    this.props.addTask(tempItem);

    this.inputTaskName.value = '';
    this.inputTaskSubject.value = '';
    this.inputDueDate.value = formatDate(defaultDate, '-');
    this.inputDueTime.value = '08:15';
    this.inputEffort.value = '0';
    this.inputTaskNotes.value = '';
    
  }, //handleAdd

  render: function() {
    return(
      <div className="modal fade" id="addAppointment" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.toggleAptDisplay} aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Add a Task</h4>
            </div>
            <form className="modal-body add-appointment form-horizontal" onSubmit={this.handleAdd}>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="taskName">Task</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control"
                    id="taskName" ref={(ref) => this.inputTaskName = ref } placeholder="Task" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="task">Subject</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control"
                    id="task"  ref={(ref) => this.inputTaskSubject = ref } placeholder="Subject" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="dueDate">Date Due</label>
                <div className="col-sm-9">
                  <input type="date" className="form-control"
                    id="dueDate"  ref={(ref) => this.inputDueDate = ref }
                    defaultValue={formatDate(defaultDate, '-')} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="aptTime">Time Due</label>
                <div className="col-sm-9">
                  <input type="time" className="form-control"
                    id="aptTime"  ref={(ref) => this.inputDueTime = ref } defaultValue={'08:15'} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="taskEffort">Effort</label>
                <div className="col-sm-9">
                    <input id="taskEffort" onChange={this.getEffort} ref={(ref) => this.inputEffort = ref} defaultValue={'0'} type="text" name="taskEffort" data-provide="slider" data-slider-min="0" data-slider-max="5" data-slider-step="1" data-slider-value="0" />
                    <span className="toolbar-item-button glyphicon glyphicon-question-sign"></span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="taskNotes">Notes</label>
                <div className="col-sm-9">
                  <textarea className="form-control" rows="4" cols="50"
                    id="taskNotes"  ref={(ref) => this.inputTaskNotes = ref } placeholder="Notes"></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                  <div className="pull-right">
                    <button type="button" className="btn btn-default"  onClick={this.toggleAptDisplay}>Cancel</button>&nbsp;
                    <button type="submit" className="btn btn-primary">Add Task</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    ) //return
  } //render
}); //AddAppointment

module.exports=AddAppointment;
