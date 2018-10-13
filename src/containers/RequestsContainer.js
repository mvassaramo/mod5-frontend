import React from 'react'

import Request from '../components/Request'
import Search from '../components/Search'

export default class RequestsContainer extends React.Component {

  state = {
    searchQuery: "",
  }


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
    return(
      <div>
      <Search updateSearch={this.updateSearch}/>
        {this.filterRequests().map(request =>
          <Request request={request} />
        )}
      <button onClick={this.props.addRequest}>Post a request</button>
      </div>
    )
  }







}
