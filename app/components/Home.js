var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <img src={'https://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png'}/>
        <h1>Github User Search.</h1>
      </div>
    )
  }
}

module.exports = Home;