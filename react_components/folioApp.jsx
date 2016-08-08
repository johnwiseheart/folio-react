var React = require('react');
var Repo  = require('./repo.jsx');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      repos: []	
    }
  },
  componentDidMount: function() {
    var self = this;
    $.get(this.props.source, function(result) {
      var repos = result.filter(function (repo, pos) {
        return repo.homepage && repo.homepage.includes(self.props.projectPage);
      });

      for (var i = 0; i < repos.length - 1; i++) {
        if ( repos[i].homepage == repos[i+1].homepage ) {
          repos.splice(i+1, 1);
        }
      }

      $.get(self.props.gist, function(result) {
        var gist = result.filter(function (gist) {
          return gist.id = self.props.gistId;
        });
        var url = gist.filter(item => {
          return item.description == 'projects'
        })[0].files.projects.raw_url;
        $.get(url, function(result) {
            result = JSON.parse(result);
            self.setState({repos: repos.concat(result).sort(function (a, b) {
              return a.name > b.name;
            })});
        }.bind(self));
      }.bind(self));

    }.bind(self));
  },
  render: function() {
    if (this.state.repos.length) {
      return (
        <div>
          <Header />
          <div className="app block-grid-xs-1 block-grid-sm-3 block-grid-md-3">
            {this.state.repos.map(function(object, i){
              return <Repo repo={object} />;
            })}
          </div>
          <Footer />
        </div>
      )
    } else {
      return (
        <div className="text-center">
          <Header />
          <h1><i className="fa fa-cog fa-spin"></i></h1>
          <Footer />
        </div>
      )
    }
  }
});

