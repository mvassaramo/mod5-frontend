import React from 'react'
import { Button } from 'semantic-ui-react'
import ErrorPopup from './ErrorPopup'

export default class Availability extends React.Component {

  renderErrorMessage = () => <ErrorPopup/>

  render () {
    const { time, booked } = this.props.availability
    return(
      <React.Fragment>
      <div className="availabilities">
        <p>{time}</p>

      {
         booked ?
          <p>Already taken</p>
          : <button className="button" onClick={() => this.props.makeBookingToServer(this.props.availability)}>Book</button>
      }
        </div>
      </React.Fragment>
    )
  }
}
