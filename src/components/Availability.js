import React from 'react'
import { Button } from 'semantic-ui-react'


export default class Availability extends React.Component {

  render () {
    const { time, booked } = this.props.availability
    return(
      <React.Fragment>
      <div className="availabilities">
        <p>{time}</p>
        { booked ?
          <p>Already taken</p>
          : <button onClick={() => this.props.makeBookingToServer(this.props.availability)}>Book</button>
        }
        </div>
      </React.Fragment>
    )
  }
}
