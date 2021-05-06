import React from "react";
import EditContact from "./page/EditContact";
import ListContact from "./page/ListContact";
import CreateContact from "./page/CreateContact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact/:id">
          <EditContact />
        </Route>
        <Route path="/contact">
          <CreateContact />
        </Route>
        <Route path="/">
          <ListContact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
