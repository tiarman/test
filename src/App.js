import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Country from './Components/Country/Country';
import NoMatch from './NoMatch/NoMatch';

function App() {
  return (
    <div>
      <Home></Home>
      <NoMatch></NoMatch>
    </div>
  );
}

export default App;
