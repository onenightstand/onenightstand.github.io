"use strict";

//React
const React = require('react');
const ReactDOM = require('react-dom');
//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
//Components
const App = require('./components/app');
const About = require('./components/about');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ About } />
      <Route path="/about" component={ About } />
      <Route path="/one" component={ About } />
      <Route path="/two" component={ About } />
      <Route path="/three" component={ About } />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('main-content-for-react');
  ReactDOM.render(appRouter, root);
});
