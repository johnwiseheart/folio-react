var React = require('react');
var ModalTrigger = require('react-bootstrap').ModalTrigger;
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;
var Overlay = require('react-bootstrap').Overlay;

const MyModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} title='About Me' animation={true}>
        <div className='modal-body'>
          <div className="row">
            <div className="col-sm-12">
              <p>I'm a 3rd year computer science student from Sydney, Australia who loves both front-end and back-end development. I enjoy creating clever, creative and sleek web apps, and have been developing for more than 10 years.</p>
            </div>
            <div className="col-sm-6">
              <h3>Front End</h3>
              <ul className="list-inline">
                <li>HTML5</li>
                <li>CSS3</li>
                <li><a href="https://facebook.github.io/react/">React</a></li>
                <li><a href="http://alt.js.org/">Alt</a></li>
                <li>JQuery</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <h3>Back End</h3>
              <ul className="list-inline">
                <li>Python</li>
                <li>Javascript</li>
                <li>PHP</li>
                <li><a href="http://flask.pocoo.org/">Flask</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='modal-footer'>
          <Button onClick={this.props.onRequestHide}>Close</Button>
        </div>
      </Modal>
    );
  }
});


module.exports = React.createClass({
  getInitialState: function() {
    return {show: false}
  },
  toggle: function() {
    this.setState({ show: !this.state.show });
  },
  render: function() {
    var style = {
      position: 'absolute',
      backgroundColor: '#EEE',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #CCC',
      borderRadius: 3,
      marginLeft: -5,
      marginTop: 5,
      padding: 10
    };
    return (
      <footer className="text-center">
        <hr style={{width:'20%'}} />
        <div className="row">
          <div className="col-sm-12 col-md-4 text-center">
              <ModalTrigger modal={<MyModal />}>
                <h3>about</h3>
              </ModalTrigger>
          </div>
          <div className="col-sm-12 col-md-4 text-center ">
            <h3>
              <ul className="list-inline">
              <li><a href="mailto:johnwiseheart@gmail.com"><i className="fa fa-envelope-square"></i></a></li>
              <li><a href="http://facebook.com/johnwiseheart"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="https://plus.google.com/+JohnWiseheart"><i className="fa fa-google-plus-square"></i></a></li>
              <li><a href="tel:0435649493"><i className="fa fa-phone-square"></i></a></li>
              <li><a href="http://au.linkedin.com/in/johnwiseheart"><i className="fa fa-linkedin-square"></i></a></li>
              </ul>
            </h3>

          </div>
          <div className="col-sm-12 col-md-4 text-center">
              <h3><a href="#" ref="target" onClick={this.toggle}>resume</a></h3>
              <Overlay
                show={this.state.show}
                onHide={() => this.setState({ show: false })}
                placement="right"
                container={this}
                target={() => React.findDOMNode(this.refs.target)}
              >
                <div style={style}>
                  Please <a href="mailto:johnwiseheart@gmail.com">email me</a> for my resume.
                </div>
            </Overlay>
          </div>
          <div className="col-sm-12 text-center">
          <small>&copy; John Wiseheart 2015.</small>
          </div>
        </div>
      </footer>
    );
  }
})
