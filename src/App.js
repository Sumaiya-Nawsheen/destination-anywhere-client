import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";



export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: ''
  }); 

  return (
    <div className="App">
        <UserContext.Provider value={{ value1: [loggedInUser, setLoggedInUser] }}>
        <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route  path="/login">
            <Login/>
          </Route>
        </Switch>
    </Router>
        </UserContext.Provider>
      
    </div>
  );
}

export default App;
