import React from 'react'

export default class Request extends React.Component{

  render () {
    const {title, date, time, first_name} = this.props.request

    return(
      <div className="request-details">
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{time}</p>
        <p>posted by: {first_name}</p>
      </div>
    )
  }


}
