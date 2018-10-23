import React from 'react'
import { Menu, Table, Label } from 'semantic-ui-react'
import Availability from './Availability'
import ErrorPopup from './ErrorPopup'


export default class StylistProfile extends React.Component {

  state = {
    availabilities: [],
    stylist: undefined,
    selectedDate: ""
  }

  selectDate = (date) => {
    this.setState({selectedDate: date})
  }

  renderAvailabilities = (availabilities) =>
  <div className="availability-container">
    {availabilities.map(availability=>
      <Availability availability={availability}
        makeBookingToServer={this.makeBookingToServer}
        currentUser={this.props.currentUser}/>
    )}
  </div>

  filterAvailabilities = () => {
     return this.state.availabilities.filter(avail =>
      avail.date == this.state.selectedDate
    )
  }

  renderError = () => {
    console.log('sign in!')
    return <ErrorPopup/>}

  makeBookingToServer = (availability) => {
    this.props.currentUser ?

      (fetch ('http://localhost:3000/api/v1/bookings', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          availability_id: availability.id,
          user_id: this.props.currentUser.id
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
      }))
      : this.props.createNotification('needsignin')


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
    const { stylist, selectedDate } = this.state
    return(

      stylist ?
      <React.Fragment>
        <h3>{stylist.first_name} {stylist.last_name}</h3>
        <h4>{stylist.bio}</h4>
        <h4>Area: {stylist.area}</h4>

        { [...new Set(
          this.state.availabilities.map(availability =>
              availability.date
           )
         )].map(uniqAvail =>
            <div className="grid-item" onClick={() => this.selectDate(uniqAvail)}>{
                uniqAvail.slice(8,10)}-{uniqAvail.slice(5,7)}-{uniqAvail.slice(0,4)}
            </div>
         )
        }

        { (selectedDate) ?
              this.renderAvailabilities(
                this.filterAvailabilities())
            : true
        }

      </React.Fragment>  :
      <h2>Loading...</h2>
    )
  }
}
