import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./common/not-found";
import Home from "./home";
import NavBar from "./navbar";
import Posts from "./posts/posts";
import Post from "./posts/post";
import CommentList from "./comments/commentList";
import { ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <div className="container">
          <Switch>
            <Route
              path="/posts/:id"
              render={(props) => (
                <React.Fragment>
                  <Post {...props} />
                  <CommentList {...props} />
                </React.Fragment>
              )}
            />
            <Route path="/posts" component={Posts} />
            <Route path="/home" component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/posts" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
