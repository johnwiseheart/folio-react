var React = require('react');
var ModalTrigger = require('react-bootstrap').ModalTrigger;
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;

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
                <li>JQuery</li>
                <li><a href="http://foundation.zurb.com/">Foundation</a></li>
                <li><a href="http://getbootstrap.com/">Bootstrap</a></li>
                <li><a href="http://purecss.io/">Pure</a></li>
              </ul>
            </div>
            <div className="col-sm-6">
              <h3>Back End</h3>
              <ul className="list-inline">
                <li>Python</li>
                <li>PHP</li>
                <li><a href="http://anchorcms.com/">Anchor</a></li>
                <li><a href="http://flask.pocoo.org/">Flask</a></li>
                <li><a href="https://www.djangoproject.com/">Django</a></li>
                <li><a href="https://wordpress.org/">Wordpress</a></li>
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
  render: function() {
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
              <h3><a href="resume.pdf">resume</a></h3>
          </div>
          <div className="col-sm-12 text-center">
          <small>&copy; John Wiseheart 2015.</small>
          </div>
        </div>
      </footer>
    );
  }
})
