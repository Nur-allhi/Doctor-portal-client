import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Appointment from "./Components/Appointment/AppointmentConnection/Appointment";
import HomeConnection from "./Components/Home/HomeConnection/Home";
import Login from "./Components/Login/Login";
// import PrivateRoute from "./Components/Login/PrivateRoute";

import Dashboard from "./Components/Dashboard/MainDashBoard/Dashboard";

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h5>{loggedInUser.displayName || loggedInUser.name}</h5>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeConnection />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/dashboard/appointment">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
