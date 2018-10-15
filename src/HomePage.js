import React from 'react'
import { Route, Link } from 'react-router-dom'

import RequestsContainer from './containers/RequestsContainer'
import StylistsContainer from './containers/StylistsContainer'
import StylistProfile from './components/StylistProfile'
import Header from './components/Header'
import AddRequestForm from './components/AddRequestForm'
import MuasContainer from './containers/MuasContainer'

const API = 'http://localhost:3000/api/v1/'

export default class HomePage extends React.Component {

  state = {
    stylists: [],
    requests: [],
    currentUser: undefined,
    addRequestForm: false
  }


  signIn = (currentUser) => this.setState({ currentUser})

  signOut = () => {
    this.setState({currentUser: undefined})
    localStorage.removeItem('currentUser')
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
        <Header currentUser={currentUser} signIn={this.signIn} signOut={this.signOut}/>
          <Link to='/muas'>MUAs</Link><br></br>
          <Link to='/stylists'>Stylists</Link><br></br>
          <Link to='/requests'>Requests</Link>
        { /*
          addRequestForm ? <AddRequestForm/>
            :
          <HomepageOptions requests={requests} stylists={stylists} addRequest={this.addRequest}/>
          */
        }

        <Route path='/muas' render={props => <MuasContainer {...props} stylists={stylists} />} />
        <Route exact path='/stylists' render={props => <StylistsContainer {...props} stylists={stylists} />} />
        <Route path='/stylists/:id' render={props => <StylistProfile {...props} stylist={stylists.find(s => s.id === parseInt(props.match.params.id, 10) )} />} />
        <Route exact path='/requests' render={props => <RequestsContainer {...props} requests={requests} />} />
        <Route path='/requests/:id' render={props => <RequestsContainer {...props} requests={requests} />} />
      </React.Fragment>
    )
  }

}
