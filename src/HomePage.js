import React from 'react'

import HomepageOptions from './components/HomepageOptions'
import RequestsContainer from './containers/RequestsContainer'
import StylistsContainer from './containers/StylistsContainer'
import Header from './components/Header'
import AddRequestForm from './components/AddRequestForm'
const API = 'http://localhost:3000/api/v1/'

export default class HomePage extends React.Component {

  state = {
    stylists: [],
    requests: [],
    currentUser: undefined,
    addRequestForm: false
  }

  addRequest = () => this.setState({ addRequestForm: true })

  getStylists = () => {
    return fetch(`${API}/stylist_listings`)
    .then(resp => resp.json())
    .then(stylists => this.setState({ stylists }))
  }

  getRequests = () => {
    return fetch(`${API}/requests`)
    .then(resp => resp.json())
    .then(requests => this.setState({ requests }))
  }

  componentDidMount() {
    this.getRequests()
    this.getStylists()
  }

  render () {
    const {requests, stylists, currentUser, addRequestForm} = this.state

    return(
      <React.Fragment>
        <Header currentUser={currentUser}/>
        { addRequestForm ? <AddRequestForm/>
            :
          <HomepageOptions requests={requests} stylists={stylists} addRequest={this.addRequest}/>
        }

      </React.Fragment>
    )
  }







}
