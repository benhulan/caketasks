var $ = jQuery = require('jquery');
var _ = require('lodash');
// var tether = require('tether'); // dependency for Bootstrap 4, which has tooltips
var bootstrap = require('bootstrap');

var fs = eRequire('fs');
var loadTasks = JSON.parse(fs.readFileSync(dataLocation));

var electron = eRequire('electron');
var ipc = electron.ipcRenderer;

var React = require('react');
var ReactDOM = require('react-dom');
var Slider = require('react-bootstrap-slider');
var TaskList = require('./TaskList');
var Toolbar = require('./Toolbar');
var HeaderNav = require('./HeaderNav');
var AddTask = require('./AddTask');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      taskBodyVisible: false,
      orderBy: 'taskName',
      orderDir: 'asc',
      queryText: '',
      myTasks: loadTasks
    }//return
  }, //getInitialState

  componentDidMount: function() {
    ipc.on('addTask', function(event, message) {
      this.toggleTaskDisplay();
    }.bind(this));
  },

  componentWillUnmount: function() {
    ipc.removeListener('addTask', function(event, message) {
      this.toggleTaskDisplay();
    }.bind(this));
  },  
  componentDidUpdate: function() {
    fs.writeFile(dataLocation, JSON.stringify(this.state.myTasks), 'utf8', function(err) {
      if (err) {
        console.log(err);
      }
    });//writeFile
  }, //componentDidUpdate

  toggleTaskDisplay: function() {
    var tempVisibility = !this.state.taskBodyVisible;
    this.setState({
      taskBodyVisible: tempVisibility
    }); //setState
  }, //toggleTaskDisplay

  changeEffort: function() {
    var mySlider = new Slider(slider);
    // var mySlider = document.getElementById('taskEffort').slider();
    // console.log(mySlider);
    // var minSliderValue = mySlider.data("slider-min");
    // var maxSliderValue = mySlider.data("slider-max");

    // document.getElementById('taskEffort').slider();
    // var tempVariable = document.getElementById('taskEffort');

    // If You want to change input text using slider handler
    mySlider.on('slide', function(slider){
      document.getElementById("taskEffort").val(slider.value);
    });

    // If you want to change slider using input text
    // document.getElementById("inputValue").on("keyup", function() {
    //     var val = Math.abs(parseInt(this.value, 10) || minSliderValue);
    //     this.value = val > maxSliderValue ? maxSliderValue : val;
    //     mySlider.setValue(val);
    // });
  },

  showAbout:function() {
    ipc.sendSync('openInfoWindow');
  }, //showAbout

  addTask: function(tempItem) {
    var tempTasks = this.state.myTasks;
    tempTasks.push(tempItem);
    this.setState({
      myTasks: tempTasks,
      taskBodyVisible: false
    }) //setState
  }, //addTask

  deleteMessage: function(item) {
    var allTasks = this.state.myTasks;
    var newTasks = _.without(allTasks, item);
    this.setState({
      myTasks: newTasks
    }); //setState
  }, //deleteMessage

  reOrder: function(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    }) //setState
  }, //reOrder

  searchTasks: function(query) {
    this.setState({
      queryText: query
    }); //setState
  }, //searchTasks

  render: function() {
    var filteredTasks = [];
    var queryText = this.state.queryText;
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var myTasks = this.state.myTasks;

    if(this.state.taskBodyVisible === true) {
      $('#addTask').modal('show');
    } else {
      $('#addTask').modal('hide');
    }

    for (var i = 0; i < myTasks.length; i++) {
      if (
        (myTasks[i].taskName.toLowerCase().indexOf(queryText)!=-1) ||
        (myTasks[i].taskSubject.toLowerCase().indexOf(queryText)!=-1) ||
        (myTasks[i].dueDate.toLowerCase().indexOf(queryText)!=-1) ||
        (myTasks[i].taskNotes.toLowerCase().indexOf(queryText)!=-1)
      ) {
        filteredTasks.push(myTasks[i]);
      }
    }

    filteredTasks = _.orderBy(filteredTasks, function(item) {
      return item[orderBy];
    }, orderDir); // order array

    filteredTasks=filteredTasks.map(function(item, index) {
      return(
        <TaskList key = {index}
          singleItem = {item}
          whichItem =  {item}
          onDelete = {this.deleteMessage}
        />
      ) // return
    }.bind(this)); //Tasks.map

    return(
      <div className="application">
        <HeaderNav
          orderBy = {this.state.orderBy}
          orderDir =  {this.state.orderDir}
          onReOrder = {this.reOrder}
          onSearch= {this.searchTasks}
        />
        <div className="interface">
          <Toolbar
            handleToggle = {this.toggleTaskDisplay}
            handleAbout = {this.showAbout}
          />
          <AddTask
            handleToggle = {this.toggleTaskDisplay}
            addTask = {this.addTask}
            onEffortChange = {this.changeEffort}
          />
          <div className="container">
           <div className="row">
             <div className="tasks col-sm-12">
               {/*<h2 className="tasks-headline">My Tasks:</h2>*/}
               <ul className="item-list media-list">{filteredTasks}</ul>
             </div>{/* col-sm-12 */}
           </div>{/* row */}
          </div>{/* container */}
        </div>{/* interface */}
      </div>
    );
  } //render
});//MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('cakeTasks')
); //render
