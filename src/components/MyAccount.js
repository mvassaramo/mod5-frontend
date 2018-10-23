import React from 'react'
import { Route, Link } from 'react-router-dom'



export default class MyAccount extends React.Component {

  state = {
    currentStylist: undefined,
    appointments: []
  }

  // findStylistBookings = () => {
  //   this.state.appointments.filter(appt =>
  //   appt.stylist_id === this.props.currentUser.id
  //   )
  // }
  //
  // findCustomerBookings = () => {
  //   this.state.appointments.filter(appt =>
  //   appt.customer_id === this.props.currentUser.id
  //   )
  // }

  componentDidMount = () => {
    this.props.currentUser.bookings.map(booking => {
      fetch(`http://localhost:3000/api/v1/booking_info/${booking.id}`)
        .then(resp => resp.json())
        .then(data =>
          this.setState({appointments: [...this.state.appointments, data]})
        )
    })
  }

  render () {
    const {first_name, last_name, services, availabilities, stylist_listing, email, contact_number} = this.props.currentUser
    return(
      <React.Fragment>
        <br></br>
        <h2>Account Details</h2>

        <Link to='/mydetails'>Personal details</Link>

          <h3>Bookings:</h3>

            <h4>Customer bookings</h4>
            {this.state.appointments.filter(appt =>
                appt.stylist_id === this.props.currentUser.id
              ).map(stylistappt =>
                <div>
                  <p>Customer: {stylistappt.customer_name}</p>
                  <p>Date: {stylistappt.date}</p>
                  <p>Time: {stylistappt.time}</p>
                  <br></br>
                </div>
              )
            }
            <h4>Treatments booked:</h4>
            {this.state.appointments.filter(appt =>
                appt.customer_id === this.props.currentUser.id
              ).map(stylistappt =>
                <div>
                  <p>Stylist: {stylistappt.stylist_name}</p>
                  <p>Date: {stylistappt.date}</p>
                  <p>Time: {stylistappt.time}</p>
                  <br></br>
                </div>
              )
            }
      </React.Fragment>
    )
  }




}
