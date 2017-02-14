var React = require('react');

var HeaderNav = React.createClass({

  handleSort: function(e) {
    this.props.onReOrder(e.target.id, this.props.orderDir);
  }, //handleSort

  handleOrder: function(e) {
    this.props.onReOrder(this.props.orderBy, e.target.id);
  }, //handleOrder

  handleSearch: function(e) {
    this.props.onSearch(e.target.value);
  }, //handleSearch

  render: function() {
    return(
      <nav className="navigation navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header"><h3 className="navbar-brand" href="#">CakeTasks</h3></div>
          <div className="navbar-form navbar-right search-tasks">
              <div className="input-group">
                <input id="SearchTasks" onChange={this.handleSearch} placeholder="Search" autoFocus type="text" className="form-control" aria-label="Search Tasks" />
                <div className="input-group-btn">
                  <button type="button" className="btn btn-info dropdown-toggle"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li><a href="#" id="taskName" onClick={this.handleSort}>Task Name {(this.props.orderBy === 'taskName') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                      <li><a href="#" id="dueDate" onClick={this.handleSort}>Due Date {(this.props.orderBy === 'dueDate') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                      <li><a href="#" id="taskSubject" onClick={this.handleSort}>Subject  {(this.props.orderBy === 'taskSubject') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                      <li><a href="#" id="taskEffort" onClick={this.handleSort}>Effort  {(this.props.orderBy === 'taskEffort') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                      <li><a href="#" id="taskNotes" onClick={this.handleSort}>Notes  {(this.props.orderBy === 'taskNotes') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#" id="asc" onClick={this.handleOrder}>Asc {(this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                      <li><a href="#" id="desc" onClick={this.handleOrder}>Desc {(this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                    </ul>
                </div>{/* input-group-btn */}
            </div>{/* input-group */}
          </div>{/* navbar-form */}
        </div>{/* container-fluid */}
      </nav>
    ) // return
  }//render
}); //HeaderNav

module.exports = HeaderNav;
