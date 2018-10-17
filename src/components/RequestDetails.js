import React from 'react'


export default class RequestDetails extends React.Component {

  render () {
    const {title, date, time, first_name, description, other_info} = this.props.request

    return(
      <React.Fragment>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{time}</p>
        <p>description: {description}</p>
        <p>Extra info: {other_info}</p>
        <button>Contact {first_name}</button>
      </React.Fragment>
    )
  }

}
