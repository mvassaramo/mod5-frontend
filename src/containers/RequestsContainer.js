import React from 'react'

import Request from '../components/Request'


export default class RequestsContainer extends React.Component {
  render () {
    return(
      <div>
        {this.props.requests.map(request =>
          <Request request={request}/>
        )}
      </div>
    )
  }







}
