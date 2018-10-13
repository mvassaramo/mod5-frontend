import React from 'react'

import HomepageOptions from './components/HomepageOptions'
import RequestsContainer from './containers/RequestsContainer'
import StylistsContainer from './containers/StylistsContainer'
import Header from './components/Header'
const API = 'http://localhost:3000/api/v1/'

export default class HomePage extends React.Component {

  state = {
    stylists: [],
    requests: [],
  }

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
    const {requests, stylists} = this.state

    return(
      <React.Fragment>
        <Header/>
        <HomepageOptions requests={requests} stylists={stylists}/>
      </React.Fragment>
    )
  }







}
