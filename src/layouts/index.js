import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header';

import '../content/App.less';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
	
    return (
      <div className="all">
        <Header />
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
