import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListUsers from './ListUsers';
import AddUser from './AddUser';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {

  constructor(props) {
    super(props);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  state = {
    usersData: [
      {
        username: "tasawer",
        firstName: "Tasawer",
        lastLame: "Nawaz",
        noOfGames: 0
      },
      {
        username: "ayat",
        firstName: "Ayat",
        lastLame: "Tasawer",
        noOfGames: 10
      },
    ]
  };

  handleAddUser = (values) => {
    const newUser = {
        username: values.username,
        firstName: values.firstName,
        lastLame: values.lastLame,
        noOfGames: values.noOfGames
    }

    this.setState((currentState) => ({
      usersData: [...currentState.usersData, newUser ]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser usersData={this.state.usersData} handleAddUser={this.handleAddUser}/>
        <ListUsers usersData={this.state.usersData}/>
      </div>
    );
  }
}

export default App;
