var React = require('react');
var PropTypes = require('prop-types');
var queryString = require('query-string');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
var PlayerPreview = require('./PlayerPreview');
var Loading = require('./Loading');

function Profile (props) {
  var info = props.info;
  var stars= props.stars;

  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      <ul className='space-list-items'>
        <li>Stars: {props.stars}</li>
        {info.bio && <li>{info.bio}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        <li><Link to='/search'>Reset</Link></li>
      </ul>
    </PlayerPreview>
  )
}

Profile.propTypes = {
  info: PropTypes.object.isRequired,
  stars: PropTypes.number.isRequired,
}

function Player (props) {
  return (
    <div>
      <Profile info={props.profile} stars={props.score}/>
    </div>
  )
}

Player.propTypes = {
  profile: PropTypes.object.isRequired,
}

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      error: null,
      loading: true,
    }
  }
  componentDidMount() {
    var player = queryString.parse(this.props.location.search);

    api.battle([
      player.playerOneName
    ]).then(function (players) {
      if (player === null) {
        return this.setState(function () {
          return {
            error: 'Looks like there was an error. Check that user exists on Github.',
            loading: false,
          }
        });
      }

      this.setState(function () {
        return {
          error: null,
          winner: players[0],
          loading: false,
        }
      }); 
    }.bind(this));
  }
  render() {
    var error = this.state.error;
    var winner = this.state.winner;
    var loading = this.state.loading;

    if (loading === true) {
      return <Loading />
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to='/search'>Reset</Link>
        </div>
      )
    }

    return (
      <div className='row'>
        <Player
          label='Winner'
          score={winner.score}
          profile={winner.profile}
        />
      </div>
    )
  }
}

module.exports = Results;