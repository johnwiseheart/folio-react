var React = require('react')

var FolioApp = React.createClass({
  getInitialState: function () {
    return {
      repos: []	
    }
  },
  componentDidMount: function() {
    var self = this;
    $.get(this.props.source, function(result) {
      var repos = result.filter(function (repo) {
        return repo.homepage && repo.homepage.includes(self.props.projectPage);
      })

      this.setState({repos: repos});
    }.bind(this));
  },
  render: function() {
      return (
        <div className="app small-block-grid-2 medium-block-grid-3">
          {this.state.repos.map(function(object, i){
            return <Repo repo={object} />;
          })}
        </div>
      )
  }
});

var Repo = React.createClass({
  render: function () {
    var repo = this.props.repo;
    return <li>
      <div className="repo">
      <h1>
        {repo.name}
        <small><a href={repo.homepage}><i className="fa fa-external-link"></i></a></small>
      </h1>
      <a href={repo.html_url}><i className="fa fa-github"></i></a>
      {repo.description}<br />
      {repo.created_at}<br />
      {repo.updated_at}<br /> </div>
    </li>;
  }
});

React.render(
  <FolioApp source="https://api.github.com/users/johnwiseheart/repos" projectPage="jcaw.me"/>,
  document.getElementById('content')
);

