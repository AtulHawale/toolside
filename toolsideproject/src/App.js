import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './Components/Auth/Auth';
import Task from './Components/Tasks/Tasks';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout></Layout>
        <Route path="/login" exact component={Login}/>
        <Route path="/home" exact component="Hello"/>
        <Route path="/task" exact component={Task}/>
        <Route path="/signup" exact component=""/>
      </BrowserRouter>
    </div>
  );
}

export default App;
