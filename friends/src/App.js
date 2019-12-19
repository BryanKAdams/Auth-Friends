import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom"
import PrivateRoute from './PrivateRoute'
import loginForm from './loginForm';
import Friends from './friends'
import UnPrivateRoute from './UnPrivateRoute';
import AddFriend from './addFriend';
function App() {
  return (
    <div className="App">
      <UnPrivateRoute exact path="/" component={loginForm}></UnPrivateRoute>
      <PrivateRoute path="/friends" component={Friends}></PrivateRoute>
      <PrivateRoute path="/addfriend" component={AddFriend}></PrivateRoute>
    </div>
  );
}

export default App;
