import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddService from "./components/AdminView/AddService/AddService";
import MakeAdmin from "./components/AdminView/MakeAdmin/MakeAdmin";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import ManageServices from "./components/AdminView/ManageServices/ManageServices";
import OrderList from "./components/AdminView/OrderList/OrderList";
import Booking from "./components/UserView/Booking/Booking";
import BookingList from "./components/UserView/BookingList/BookingList";
import UsersReview from "./components/UserView/UsersReview/UsersReview";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";



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
  const [orderedItem, setOrderedItem] = useState([]);

  return (
    <div className="App">
        <UserContext.Provider value={{ value1: [loggedInUser, setLoggedInUser], value2: [registeredUser, setRegisteredUser],value3: [newUser, setNewUser], value4: [orderedItem, setOrderedItem]}}>
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
          <Route exact path="/dashboard">
            <DashBoard/>
          </Route>
          <PrivateRoute  path="/dashboard/booking/:id">
           <Booking/>
          </PrivateRoute>
          <Route  path="/dashboard/bookingList">
            <BookingList/>
          </Route>
          <Route  path="/dashboard/addService">
            <AddService/>
          </Route>
          <Route  path="/dashboard/makeAdmin">
            <MakeAdmin/>
          </Route>
          <Route  path="/dashboard/manageServices">
            <ManageServices/>
          </Route>
          <Route  path="/dashboard/orderList">
            <OrderList/>
          </Route>
          <Route  path="/dashboard/review">
            <UsersReview></UsersReview>
          </Route>
        </Switch>
    </Router>
        </UserContext.Provider>
      
    </div>
  );
}

export default App;
