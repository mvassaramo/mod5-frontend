import React from 'react'


export default class Stylist extends React.Component {


  render () {
    const {area, rating, first_name, last_name, bio} = this.props.stylist

    return(
      <React.Fragment>
        <h3>{first_name} {last_name}</h3>
        <p>{bio}</p>
        <p>Area: {area}</p>
        <p>Rating: {rating}</p>
        <button value={this.props.stylist}
          onClick={this.props.handleClick}>See Availability</button>
      </React.Fragment>
    )
  }




}
