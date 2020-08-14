import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import SideBarOption from "./components/SideBarOption";
import "./App.css";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <SideBar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome to SlackClone</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
