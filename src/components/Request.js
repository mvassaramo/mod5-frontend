import React from 'react'
import { Image, Item, Icon, Label } from 'semantic-ui-react'

const Request = (props) => {
    const {title, date, time, first_name, description} = props.request

  return(
    <div ClassName="request-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Posted by: {first_name}</p>
      <button onClick={props.selectRequest}>See more</button>
    </div>
)
}

export default Request
