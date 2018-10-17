import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Image, Item, Icon, Label } from 'semantic-ui-react'

import RequestDetails from './RequestDetails'

const Request = (props) => {
    const {title, date, time, first_name, description, id} = props.request

  return(
    <React.Fragment>
    <div ClassName="request-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Posted by: {first_name}</p>
      <Link to={`/requests/${id}`}>See more</Link><br></br>
    </div>
    <Route path='/requests/:id' render={props => <RequestDetails {...props} request={props.request} />} />
    </React.Fragment>

)
}

export default Request
