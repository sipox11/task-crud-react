import React, { Component } from 'react';

// Import styles
import './TaskForm.css';

class TaskForm extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState( {
      [name]: value
    });
    console.log(`State: ${this.state}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Sending the data...");
    this.props.onAddTask(this.state);
  }


  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              name="title"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="responsible"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Enter Responsible"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="description"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Enter Description"
            />
          </div>
          <div className="form-control">
            <select
              name="priority"
              className="form-control"
              onChange={this.handleInput}>
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <div className="form-control">
            <input
              type="submit"
              className="form-control btn btn-primary"
              value="Save"
            />
          </div>
        </form>

      </div>
    );
  }
}

export default TaskForm;
