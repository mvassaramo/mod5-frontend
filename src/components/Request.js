import React from 'react'

export default class Request extends React.Component{

  render () {
    return(
      <div className="request-details">
        <h1>{this.props.request.title}</h1>
        <p>{this.props.request.date}</p>
        <p>{this.props.request.time}</p>
      </div>
    )
  }


}
