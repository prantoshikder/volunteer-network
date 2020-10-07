import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import List from './Components/List/List';
import ListItem from './Components/ListItem/ListItem';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>   
      <Router>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/list">
            <ListItem></ListItem>
          </PrivateRoute>
          <PrivateRoute path="/register/:title">
            <Register></Register>
          </PrivateRoute>
          
        </Switch>
      </Router>
    </UserContext.Provider> 
  );
}

export default App;
