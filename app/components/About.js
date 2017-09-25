var React = require('react');

class Popular extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This app is a remix of one developed by Tyler McGinis for 
          his course <a href={'https://tylermcginis.com/courses/react-fundamentals/'}>
          React Fundamentals</a> (https://tylermcginis.com/courses/react-fundamentals/)
          and here is <a href={'https://github.com/tylermcginis/React-Fundamentals/tree/lifecycle'}>
          his Github repository</a> (https://github.com/tylermcginis/React-Fundamentals/tree/lifecycle)
          for that project.
        </p>
        <iframe src="https://www.youtube.com/embed/wh-07BzfgYY?ecver=2" width="480" height="360" frameBorder="0" allowFullScreen></iframe>
     </div>
    )
  }
}

module.exports = Popular;