import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HomeConnection from "./Components/Home/HomeConnection/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeConnection />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
