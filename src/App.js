import { UserContextProvider } from "./components/context/userContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";

import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/Home" exact component={Home}></Route>
          <Route path="/Menu" exact component={Menu}></Route>
        </Switch>
      </Router>
    </UserContextProvider>
  );
}

export default App;
