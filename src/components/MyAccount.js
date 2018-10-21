import React from 'react'



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
    const {first_name, last_name, services, availabilities, stylist_listing} = this.props.currentUser
    return(
      <React.Fragment>

        <h4>My details</h4>
        <p>First Name: {first_name}</p>
        <p>Last Name: {last_name}</p>

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
            <h4>Stylist bookings</h4>
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

//
// {this.state.appointments.map(appointment =>
//   <div>
//   <p>{appointment.customer_name}</p>
//   <p>{appointment.stylist_name}</p>
//   <p>{appointment.time}</p>
//   <p>{appointment.date}</p>
//   </div>
//   )
//
// }
