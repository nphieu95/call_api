import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Menu Start */}
          <Menu></Menu>
          {/* Menu End */}

          {/* Body Start */}
          <div className="container">
            <div className="row">{this.showContentMenus(routes)}</div>
          </div>
          {/* Body End */}
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}
export default App;
