var React = require('react');

var Toolbar = React.createClass({

  createTask: function() {
    this.props.handleToggle();
  }, //createTask

  toggleAbout: function() {
    this.props.handleAbout();
  }, //toggleAbout

  toggleView: function() {
    this.props.handleView();
  },
  
  render: function() {
    return(
      <div className="toolbar">
        <div className="toolbar-item" onClick={this.createTask}>
          <span className="toolbar-item-button glyphicon glyphicon-plus-sign"></span>
          <span className="toolbar-item-text">New Task</span>
        </div>
        <div className="toolbar-item" onClick={this.toggleAbout}>
          <span className="toolbar-item-button glyphicon glyphicon-download-alt"></span>
          <span className="toolbar-item-text">Import</span>
        </div>
        <div className="toolbar-item" onClick={this.toggleView}>
          <span className="toolbar-item-button glyphicon glyphicon-eye-open"></span>
          <span className="toolbar-item-text">Change View</span>
        </div>
        <div className="toolbar-item" onClick={this.toggleAbout}>
          <span className="toolbar-item-button glyphicon glyphicon-info-sign"></span>
          <span className="toolbar-item-text">About</span>
        </div>
        <div className="toolbar-item" onClick={this.toggleAbout}>
          <span className="toolbar-item-button glyphicon glyphicon-bullhorn"></span>
          <span className="toolbar-item-text">Tell a Friend</span>
        </div>
      </div>
    ) //return
  } //render
}); //Toolbar

module.exports = Toolbar;
