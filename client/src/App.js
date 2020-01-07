import React from "react";
import "./App.css";
import {Route, Switch} from 'react-router-dom';
import ZookiLP from "./Components/zookiLP/zookiLP";
import AdminDashboard from './Components/adminDashboard/Index'
import AdminLogin from './Components/adminLogin/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ZookiLP}/>
        <Route exact path="/adminlogin" component={AdminLogin}/>
        <Route exact path="/admindashboard" component={AdminDashboard}/>
      </Switch>
    </div>
  );
}

export default App;
