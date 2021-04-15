import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
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
  const [newUser, setNewUser] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    password2: '',
    photo: ''
  });

  return (
    <div className="App">
        <UserContext.Provider value={{ value1: [loggedInUser, setLoggedInUser], value2: [registeredUser, setRegisteredUser],value3: [newUser, setNewUser]}}>
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
          <Route  path="/dashboard">
            <DashBoard/>
          </Route>
        </Switch>
    </Router>
        </UserContext.Provider>
      
    </div>
  );
}

export default App;
