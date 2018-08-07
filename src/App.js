// Import React
import React, { Component } from 'react';

// Import React Logo
import logo from './logo.svg';

// Import sample data
import { tasks } from './tasks.json';

// Import app styles
import './App.css';

// Import custom Components
import Navigation from './components/Navigation';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Task App',
      tasks: tasks
    }
  }

  handleAddTask(task) {
    this.state({
      tasks: [this.state.tasks, task]
    });
  }

  render() {
    // Before returning
    console.log("Before rendering component...");
    console.log("Tasks: ", tasks);
    const tasks = this.state.tasks.map((task, i) => {
      return (
        <TaskCard title={ task.title } responsible={ task.responsible } priority={ task.priority } description={ task.description } number={i} />
      );
    })
    return (
      <div className="App">
        <Navigation title={ this.state.title } nTareas={ tasks.length }/>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-4">
              <img id="logo" src={logo} className="App-logo" alt="logo"/>        
              <TaskForm onAddTask={this.handleAddTodo} />
            </div>
            <div className="col-md-9">
              { tasks }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
