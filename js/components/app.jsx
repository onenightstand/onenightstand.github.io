"use strict";

const React = require('react');
const Link = require('react-router').Link;

const App = React.createClass({
  render () {
    let path = this.props.location.pathname;

    let aboutClass = "nav-link";
    let oneClass = "nav-link";
    let twoClass = "nav-link";
    let threeClass = "nav-link";

    if ( path === "/" || path === "/about" ) {
      aboutClass += " active";
    } else if ( path === "/one" ) {
      oneClass += " active";
    } else if ( path === "/two" ) {
      twoClass += " active";
    } else if ( path === "/three" ) {
      threeClass += " active";
    }

    return (
      <div>
        <nav>
          <Link className={ aboutClass } to="about">About</Link>
          <Link className={ oneClass } to="one">One</Link>
          <Link className={ twoClass } to="two">Two</Link>
          <Link className={ threeClass } to="three">Three</Link>
        </nav>
        <div className="wrapper">
          <div className="under-nav"></div>
          <div className="main-content">
            <div className="left-column">
              { this.props.children }
            </div>
            <div className="right-column">
              <p>SideBar</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
