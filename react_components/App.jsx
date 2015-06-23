var React    = require('react');
var FolioApp = require('./folioApp.jsx');

React.render(
  <FolioApp
    source="https://api.github.com/users/johnwiseheart/repos"
    gist="https://api.github.com/users/johnwiseheart/gists"
    gistId="0ebf4b3e3d94993a0c30"
    projectPage="jcaw.me"/>,
  document.getElementById('content')
);

