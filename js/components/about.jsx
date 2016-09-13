"use strict";

const React = require('react');
const Link = require('react-router').Link;

const About = React.createClass({
  render () {
    return (
      <div>
        <div>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis mauris quam. Maecenas eleifend tellus quis interdum feugiat. Suspendisse at sem eros. Cras sagittis risus est, vel ullamcorper nulla interdum et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec hendrerit dui ligula, eu fringilla arcu euismod vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin aliquet consectetur. Vestibulum at felis ultrices, tincidunt dolor sed, interdum magna. Donec fringilla metus sit amet enim faucibus, in faucibus magna congue. Quisque ut erat porttitor, facilisis eros quis, elementum odio. Suspendisse tincidunt odio ac lorem faucibus malesuada. Sed ex leo, dapibus non tempor et, mattis vel massa. Suspendisse sollicitudin eleifend finibus. Duis eget est nisi.
          </p>

          <p>
            Fusce eros nisi, imperdiet sit amet risus quis, pretium laoreet tellus. Integer nec pulvinar metus, eget pretium tellus. Nunc nec scelerisque nisi, ac rhoncus purus. Donec facilisis purus turpis. Vestibulum luctus justo sed accumsan efficitur. Proin congue nulla quis orci venenatis blandit. Maecenas aliquam arcu a faucibus fermentum. Phasellus malesuada euismod massa consequat viverra. Vestibulum tincidunt ligula lorem, quis congue orci aliquam a. Nullam tristique ligula quis dolor volutpat, id blandit felis semper. In hac habitasse platea dictumst. Vestibulum semper tincidunt felis eu ornare. Suspendisse in finibus metus.
          </p>
        </div>
        <div>
          <div className="row">
            <div className="cell">
              <ul>
                <li>more stuff</li>
                <li>more stuff</li>
              </ul>
            </div>
            <div className="cell">
              <ul>
                <li>more stuff</li>
                <li>more stuff</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
