import React from 'react'
import { Menu, Table, Icon, Label } from 'semantic-ui-react'


export default class StylistProfile extends React.Component {

  state = {
    availabilities: [],
    stylist: undefined
  }

  makeBookingToServer = (availability) => {
    fetch ('http://localhost:3000/api/v1/bookings', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        availability_id: availability.id,
        user_id: 2
      })
    })
    .then(() => {
      this.setState({
        availabilities: this.state.availabilities.map(av => {
          if (av.id !== availability.id) return av
          av.booked = true
          return av
        })
      })
    })

  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/stylist_listings/${this.props.match.params.id}/availabilities`)
      .then(resp => resp.json())
      .then(availabilities => this.setState({ availabilities }))
    fetch(`http://localhost:3000/api/v1/stylist_listings/${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(stylist => this.setState({ stylist }))
  }

  render () {
    const { stylist } = this.state
    return(
      stylist ?
      <React.Fragment>
      <h3>{stylist.first_name} {stylist.last_name}</h3>
      <h4>Bio: {stylist.bio}</h4>
      <h4>Area: {stylist.area}</h4>
      <h4>Rating: {stylist.rating}</h4>
      {<div className="grid-container">
      {
        this.state.availabilities.map(availability =>
        <div className="grid-item">
           {availability.date}<br></br>
           {availability.time}
           { availability.booked ?
             <p>Already taken</p>
             : <button onClick={() => this.makeBookingToServer(availability)}>Book</button>
           }
         </div>
         )
      }
    </div>}

      </React.Fragment> :
      <h2>Loading...</h2>
    )
  }
}
