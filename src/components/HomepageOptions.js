import React from 'react'


export default class HomepageOptions extends React.Component {

  render () {

    return(
      <React.Fragment>
        <button className="all-requests-button" onClick={() => this.props.selectPage('Requests')}>See all Listings</button>
        <button className="all-muas-button" onClick={() => this.props.selectPage('MUAs')}>See all MUAs</button>
        <button className="all-hairstylists-button" onClick={() => this.props.selectPage('hairstylists')}>See all Hair Stylists</button>
      </React.Fragment>
    )
  }
  }
