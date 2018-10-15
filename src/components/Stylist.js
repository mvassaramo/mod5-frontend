import React from 'react'
import { Route, Link } from 'react-router-dom'

import StylistProfile from './StylistProfile'

export default class Stylist extends React.Component {


  render () {
    const {area, rating, first_name, last_name, bio, id} = this.props.stylist

    return(
      <React.Fragment>
        <h3>{first_name} {last_name}</h3>
        { this.props.stylist.services.map(service =>
              <p>{service.name}</p>
          )
        }
        <p>Area: {area}</p>
        <p>Rating: {rating}</p>
        <Link to={`/stylists/${id}`}
          onClick={this.props.handleClick}>See Full Profile</Link><br></br>


        <Route exact path='/stylists/:id' render={props => <StylistProfile {...props} />} />
      </React.Fragment>
    )
  }


}
