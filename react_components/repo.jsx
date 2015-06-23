var React = require('react');
var TimeAgo = React.createFactory(require('react-timeago'));
var Alert = require('react-bootstrap').Alert;
var Popover = require('react-bootstrap').Popover;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Button = require('react-bootstrap').Button;

module.exports = React.createClass({
  handleClick: function(event){
  },
  render: function () {
    var repo = this.props.repo;
    if (repo.html_url !== null) {
      var github = (
        <div className="pull-right">
            <small><a href={repo.html_url}><i className="fa fa-fw fa-github"></i></a></small>
        </div>
      );
    } else {
      var github = '';
    }
    var title = (
      <div className="clearfix repo-title">
        <div className="pull-left">
          <a href={repo.homepage}>{repo.name} <small><i className="fa fa-fw fa-external-link"></i></small></a>
        </div>
        {github}
      </div>
    );
                  
    return(
    <li onClick={this.handleClick} className="block-grid-item">
      <h3 className='text-center'>
        <OverlayTrigger trigger='click' placement='bottom' overlay={
          <Popover title={title}>
            {repo.description}<br />
            <span className="time">Created { TimeAgo({date:repo.created_at}) },
            updated { TimeAgo({date:repo.updated_at}) }</span>
          </Popover>
        }>
          <div>{repo.name}</div>
        </OverlayTrigger>
      </h3>
    </li>);
  }
});

