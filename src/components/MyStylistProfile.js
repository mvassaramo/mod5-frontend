import React from 'react'


export default class MyStylistProfile extends React.Component {


  render () {
    return(
      <React.Fragment>
        <h2> My Stylist Profile </h2>
        <p>{this.props.currentUser.stylist_listing.bio}</p>
        <p>{this.props.currentUser.stylist_listing.area}</p>
        <button className="button">Edit profile</button>


      </React.Fragment>
    )
  }



}

// <p>{this.props.currentUser.stylist_listing.tagline}</p>
