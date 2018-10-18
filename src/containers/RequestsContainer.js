import React from 'react'
import { Link } from 'react-router-dom'

import Request from '../components/Request'
import RequestDetails from '../components/RequestDetails'
import Search from '../components/Search'

export default class RequestsContainer extends React.Component {

  state = {
    searchQuery: "",
    selectedRequest: undefined
  }


  renderAllRequests = () =>
    <div>
    <Search updateSearch={this.updateSearch}/>
      {this.filterRequests().map(request =>
        <Request request={request} selectRequest={this.selectRequest}/>
      )}
    </div>

  selectRequest = (selectedRequest) => this.setState({ selectedRequest })

  updateSearch = (searchQuery) => this.setState({ searchQuery })

  filterRequests = () =>
    this.props.requests.filter(request => {
      const title = request.title.toLowerCase()
      const description = request.description.toLowerCase()
      const date = request.date.toLowerCase()
      const searchQuery = this.state.searchQuery.toLowerCase()

      return title.includes(searchQuery)
        || description.includes(searchQuery)
        || date.includes(searchQuery)
    })


  render () {
    const {selectedRequest} = this.state
    return(
      <React.Fragment>
        <Link to='/addRequest'><button>Post a request!</button></Link>
        <br></br>
        {this.renderAllRequests()}
      </React.Fragment>
    )
  }







}
