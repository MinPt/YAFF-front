import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./common/not-found";
import Home from "./home";
import NavBar from "./navbar";
import Posts from "./posts/posts";
import Post from "./posts/post";
import CommentList from "./comments/commentList";
import { ToastContainer } from "react-toastify";
import CreatePostForm from "./forms/createPostForm";
import Markdown from "./markdown";
import Login from "./forms/login";
import SecuredRoute from "../components/common/securedRoute";
import Register from "./forms/registration";
import FormikForm from "./common/formikForm";
import isLogged from "../utilities/isAuntificated";
import UserProfile from "./profiles/profile";

class App extends Component {
  constructor(params) {
    super(params);
    this.state = {
      isLogged: isLogged(),
    };
  }

  handleAuthorization = () => {
    this.setState({ isLogged: isLogged() });
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar onLogout={this.handleAuthorization} />
        <div className="container">
          <Switch>
            <Route
              path="/users/:id"
              render={(props) => <UserProfile {...props} />}
            />
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
            <SecuredRoute path="/createPost">
              <CreatePostForm />
            </SecuredRoute>
            <Route
              path="/login"
              render={(props) => <Login onLogin={this.handleAuthorization} />}
            />
            <Route path="/formik-form" component={FormikForm} />
            <Route path="/registration" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/markdown" component={Markdown} />
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
